export default async function handler(req, res) {
    const { type, owner, repo } = req.query;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

    // Input validation
    if (['org', 'repo'].indexOf(type) === -1) {
        return res.status(400).json({ error: 'Invalid type, must be "org" or "repo"' });
    }
    if (!owner) {
        return res.status(400).json({ error: 'Missing owner' });
    }
    if (type === 'repo' && !repo) {
        return res.status(400).json({ error: 'Missing repo for type "repo"' });
    }
    if (!GITHUB_TOKEN) {
        console.warn('No GITHUB_TOKEN set, requests will be rate-limited');
    }

    const headers = GITHUB_TOKEN
        ? { Authorization: `token ${GITHUB_TOKEN}` }
        : {};

    async function fetchAllCommits(owner, repo, headers) {
        let allCommits = [];
        let nextLink = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100&page=1`;

        while (nextLink) {
            const res = await fetch(nextLink, { headers });
            const commits = await res.json();
            // This is how they do it according to the docs
            if (res.headers.get('link')?.includes('rel="next"')) {
                const linkHeader = res.headers.get('link');
                const nextMatch = linkHeader && linkHeader.match(/<([^>]+)>;\s*rel="next"/);
                // The captured string is the second item
                nextLink = nextMatch ? nextMatch[1] : null;
            } else {
                nextLink = null;
            }
            allCommits = allCommits.concat(commits);
        }
        return allCommits;
    }

    function createMonthList(start) {
        const end = new Date().toISOString().slice(0, 7);
        const months = [];
        let [year, month] = start.split('-').map(Number);
        const [endYear, endMonth] = end.split('-').map(Number);

        while (year < endYear || (year === endYear && month <= endMonth)) {
            months.push(`${year.toString()}-${month.toString().padStart(2, '0')}`);
            month++;
            if (month > 12) {
                month = 1;
                year++;
            }
        }
        return months;
    }

    if (type === 'repo') {
        try {
            const commits = await fetchAllCommits(owner, repo, headers);
            if (!Array.isArray(commits)) {
                return res.status(500).json({ error: 'Failed to fetch commits' });
            }

            const aggregate = {};
            commits.forEach(commit => {
                const date = commit.commit.author.date;
                const month = date.slice(0, 7); // "YYYY-MM"
                aggregate[month] = (aggregate[month] || 0) + 1;
            });

            const sortedMonths = Object.keys(aggregate).sort();
            const months = createMonthList(sortedMonths[0]);

            const returnData = months.map(month => ({
                month,
                commits: aggregate[month]
            }));

            res.status(200).json(returnData);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        try {
            const orgRes = await fetch(`https://api.github.com/orgs/${owner}/repos`,
                { headers }
            );
            const repos = await orgRes.json();
            if (!Array.isArray(repos)) {
                return res.status(500).json({ error: 'Failed to fetch repositories' });
            }

            const repoCommits = (await Promise.all(
                repos.map(async repo => {
                    const commits = await fetchAllCommits(owner, repo.name, headers);
                    return commits.map(commit => ({
                        ...commit,
                        repo: repo.name
                    }));
                })
            )).flat();

            const aggregate = {};
            repoCommits.forEach(commit => {
                const month = commit.commit.author.date.slice(0, 7);
                const repo = commit.repo;
                aggregate[month] = aggregate[month] || {};
                aggregate[month]['commits'] = (aggregate[month]['commits'] || 0) + 1;
                aggregate[month]['repos'] = aggregate[month]['repos'] || {};
                aggregate[month]['repos'][repo] = (aggregate[month]['repos'][repo] || 0) + 1;
            });

            const sortedMonths = Object.keys(aggregate).sort();
            const months = createMonthList(sortedMonths[0]);

            const returnData = months.map(month => ({
                month,
                ...aggregate[month]
            }));
            res.status(200).json(returnData);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}