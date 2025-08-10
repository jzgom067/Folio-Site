// modules
import PlaceholderImage from '../common/PlaceholderImage.js';

// styling
import styles from './Commit.module.css';

function timeAgo(date) {
    const seconds = Math.floor((Date.now() - new Date(date)) / 1000);
    if (seconds < 60) return `just now`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
}

const Commit = ({ data }) => {
    // Get only the first line of the commit message
    const summary = data.message.split('\n')[0];
    const message = data.message.split('\n').slice(1).join('\n');

    return (
        <div className={styles.commit}>
            <div className={styles.mainRow}>
                <PlaceholderImage
                    className={styles.avatar}
                    src={data.author_avatar}
                    alt={data.author_name}
                    aspectRatio="1"
                />
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div className={styles.titleLine}>
                            <div className={styles.summary}>
                                {summary}
                            </div>
                        </div>
                        {message && <div className={styles.message}>{message}</div>}
                    </div>
                    <div className={styles.linesChanged}>
                        <div className={styles.linesChangedValues}>
                            <span className={styles.additions}>+{data.stats.additions}</span>
                            <span className={styles.deletions}>-{data.stats.deletions}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerRow}>
                <span>@{data.author_name}{data.repo && <> - {data.repo}</>}</span>
                <span className={styles.timeAgo}>{timeAgo(data.timestamp)}</span>
            </div>
        </div>
    );
};

export default Commit;
