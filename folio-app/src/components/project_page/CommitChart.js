import { useEffect, useState, useRef } from 'react';
import SlideFadeIn from '../common/SlideFadeIn';

// styling
import styles from './CommitChart.module.css';

function CommitChart({ type = 'repo', owner, repo }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipData, setTooltipData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const offset = chartRef.current.getBoundingClientRect();
      setTooltipPos({ x: e.clientX - offset.left, y: e.clientY - offset.top });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const chartMouseEnter = (e) => {
    setTooltipVisible(true);
  };

  const chartMouseLeave = (e) => {
    setTooltipVisible(false);
  };

  const cellMouseEnter = (month, project) => (e) => {
    let dataVal = [month];
    if (project.commits) {
      dataVal.push(project.commits + ' commit' + (project.commits > 1 ? 's' : ''));
    } else {
      dataVal.push('No commits');
    }
    setTooltipData(dataVal);
  };

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
    <div className={styles.commitChart} ref={chartRef}>
      <h2 className={styles.commitChartTitle}>Timeline</h2>
      <div className={styles.subtext}>
        {loading && <>Loading...</>}
        {error && <>Error: {error}</>}
        {!loading && !error && data.length === 0 && <>No commits found.</>}
      </div>
      <SlideFadeIn>
        <div
          className={styles.chartRow}
          onMouseEnter={chartMouseEnter}
          onMouseLeave={chartMouseLeave}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className={styles.chartCell}
            >
              <div className={styles.chartXAxis}>
                {item.projects.map((project, idx) => (
                  <div key={idx} onMouseEnter={cellMouseEnter(item.month, project)}>
                    {idx === 0 &&
                      <div className={styles.chartCellSpacer} />
                    }
                    <div
                      className={styles.chartCellContent}
                      style={{
                        backgroundColor: project.commits > 0 ? 'red' : 'transparent',
                        borderLeft: project.commits > 0 ? 'none' : ''
                      }}
                    />
                    <div className={styles.chartCellSpacer} />
                  </div>
                ))}
              </div>
              <div className={styles.chartDate}>
                <span>{getMonthInitial(item.month)}</span>
                <span>{getYear(item.month, idx)}</span>
              </div>
            </div>
          ))}
        </div>
      </SlideFadeIn>
      {tooltipVisible &&
        <div
          className={styles.tooltip}
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y + 20,
          }}
        >
          {tooltipData.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      }
    </div>
  );
};

export default CommitChart;