import { useEffect, useState } from 'react';
import SlideFadeIn from '../common/SlideFadeIn';
import Commit from './Commit';

// styling
import styles from './CommitList.module.css';

function CommitList({ owner, repo, count = 5 }) {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=${count}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch commits');
        return res.json();
      })
      .then(data => {
        setCommits(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [owner, repo, count]);

  return (
    <div className={styles.commitList}>
      <h2 className={styles.commitListTitle}>Latest Commits</h2>
      <div className={styles.subtext}>
        {loading && <>Loading...</>}
        {error && <>Error: {error}</>}
        {!loading && !error && commits.length === 0 && <>No commits found.</>}
      </div>
      {commits.map(commit => (
        <SlideFadeIn key={commit.sha}>
          <Commit data={commit} />
        </SlideFadeIn>
      ))}
    </div>
  );
};

export default CommitList;