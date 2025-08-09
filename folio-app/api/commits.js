export default async function handler(req, res) {
    const { owner, repo } = req.query;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const MAX_COMMITS = 5;

    if (!owner) {
        return res.status(400).json({ error: 'Missing owner' });
    }
    if (!repo) {
        return res.status(400).json({ error: 'Missing repo' });
    }
    if (!GITHUB_TOKEN) {
        console.warn('No GITHUB_TOKEN set, requests will be rate-limited');
    }

    const headers = GITHUB_TOKEN
        ? { Authorization: `token ${GITHUB_TOKEN}` }
        : {};

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
}