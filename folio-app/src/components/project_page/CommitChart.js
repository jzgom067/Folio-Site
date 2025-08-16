import { useEffect, useState } from 'react';
import SlideFadeIn from '../common/SlideFadeIn';

// styling
import styles from './CommitChart.module.css';

function CommitChart({ type = 'repo', owner, repo }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams();
    if (type) params.append('type', type);
    if (owner) params.append('owner', owner);
    if (repo) params.append('repo', repo);
    fetch(`/api/commitAggregate?${params.toString()}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch commits');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [type, owner, repo]);

  function getMonthInitial(month) {
    const months = {
      '01': 'J',
      '02': 'F',
      '03': 'M',
      '04': 'A',
      '05': 'M',
      '06': 'J',
      '07': 'J',
      '08': 'A',
      '09': 'S',
      '10': 'O',
      '11': 'N',
      '12': 'D'
    };
    return months[month.slice(5, 7)];
  }

  function getYear(month, id) {
    if (month.slice(5, 7) === '01' || id === 0) {
      return '\'' + month.slice(2, 4);
    }
    return '';
  }

  return (
    <div className={styles.commitChart}>
      <h2 className={styles.commitChartTitle}>Timeline</h2>
      <div className={styles.subtext}>
        {loading && <>Loading...</>}
        {error && <>Error: {error}</>}
        {!loading && !error && data.length === 0 && <>No commits found.</>}
      </div>
      <SlideFadeIn>
        <div className={styles.chartRow}>
          {data.map((item, idx) => (
            <div
              key={idx}
              className={styles.chartCell}
              style={{ border: idx === 0 ? 'none' : '' }}
            >
              <div
                className={styles.chartCellContent}
                style={{ backgroundColor: item.commits > 0 ? 'red' : 'transparent' }}
              >
                {/* <span>{item.commits}</span> */}
              </div>
              <div className={styles.chartDate}>
                <span>{getMonthInitial(item.month)}</span>
                <span>{getYear(item.month, idx)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.xAxis}>
          {data.map((item, idx) => (
            <div key={idx} className={styles.xAxisTick}>
              {item.date}
            </div>
          ))}
        </div>
      </SlideFadeIn>
    </div>
  );
};

export default CommitChart;