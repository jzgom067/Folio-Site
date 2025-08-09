import { useEffect, useState } from 'react';
import SlideFadeIn from '../common/SlideFadeIn';
import Commit from './Commit';

// styling
import styles from './CommitList.module.css';

function CommitList({ owner, repo }) {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/commits?owner=${owner}&repo=${repo}`)
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
  }, [owner, repo]);

  return (
    <div className={styles.commitList}>
      <h2 className={styles.commitListTitle}>Latest Commits</h2>
      <div className={styles.subtext}>
        {loading && <>Loading...</>}
        {error && <>Error: {error}</>}
        {!loading && !error && commits.length === 0 && <>No commits found.</>}
      </div>
      {commits.map(commit => (
        <SlideFadeIn>
          <Commit data={commit} />
        </SlideFadeIn>
      ))}
    </div>
  );
};

export default CommitList;