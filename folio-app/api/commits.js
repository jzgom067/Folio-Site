export default async function handler(req, res) {
    const { type, owner, repo } = req.query;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const MAX_COMMITS = 5;

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

    if (type === 'repo') {
        try {
            const commitsRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${MAX_COMMITS}`,
                { headers }
            );
            const commits = await commitsRes.json();
            if (!Array.isArray(commits)) {
                return res.status(500).json({ error: 'Failed to fetch commits' });
            }

            const detailedCommits = await Promise.all(
                commits.map(async commit => {
                    const detailsRes = await fetch(
                        `https://api.github.com/repos/${owner}/${repo}/commits/${commit.sha}`,
                        { headers }
                    );
                    const details = await detailsRes.json();
                    return {
                        sha: commit.sha,
                        author_name: commit.author?.login || commit.commit.author.name,
                        author_avatar: commit.author?.avatar_url,
                        timestamp: commit.commit.author.date,
                        message: commit.commit.message,
                        stats: details.stats
                    };
                })
            );

            res.status(200).json(detailedCommits);
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

            const repoCommits = await Promise.all(
                repos.map(async repo => {
                    const commitsRes = await fetch(
                        `https://api.github.com/repos/${owner}/${repo.name}/commits?per_page=${MAX_COMMITS}`,
                        { headers }
                    );
                    const commits = await commitsRes.json();
                    if (!Array.isArray(commits)) {
                        return [];
                    }
                    // Add repo name to each commit for later reference
                    return commits.map(commit => ({
                        ...commit,
                        repo: repo.name
                    }));
                })
            );

            // Now get the latest 5 from all repos
            const latestCommits = repoCommits.flat().sort((a, b) => new Date(b.commit.author.date) - new Date(a.commit.author.date));
            const latestCommitsAll = latestCommits.slice(0, MAX_COMMITS);

            // Now get details for each commit
            const detailedCommits = await Promise.all(
                latestCommitsAll.map(async commit => {
                    const detailsRes = await fetch(
                        `https://api.github.com/repos/${owner}/${commit.repo}/commits/${commit.sha}`,
                        { headers }
                    );
                    const details = await detailsRes.json();
                    return {
                        sha: commit.sha,
                        repo: commit.repo,
                        author_name: commit.author?.login || commit.commit.author.name,
                        author_avatar: commit.author?.avatar_url,
                        timestamp: commit.commit.author.date,
                        message: commit.commit.message,
                        stats: details.stats
                    };
                })
            );

            res.status(200).json(detailedCommits);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}