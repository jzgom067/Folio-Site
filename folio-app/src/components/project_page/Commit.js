// modules
import PlaceholderImage from '../common/PlaceholderImage.js';

// styling
import styles from './Commit.module.css';

const Commit = ({ data }) => {
    // Get only the first line of the commit message
    const summary = data.message.split('\n')[0];
    const message = data.message.split('\n').slice(1).join('\n');

    return (
        <div className={styles.commit}>
            <PlaceholderImage
                className={styles.avatar}
                src={data.author_avatar}
                alt={data.author_name}
                aspectRatio="1"
            />
            <div className={styles.text}>
                <div className={styles.titleLine}>
                    <div className={styles.summary}>
                        {summary}
                    </div>
                    <div className={styles.author}>
                        {data.author_name}, {new Date(data.timestamp).toLocaleDateString()}
                    </div>
                    <div className={styles.linesChanged}>
                        <span className={styles.additions}>+{data.stats.additions}</span>
                        <span className={styles.deletions}>-{data.stats.deletions}</span>
                        lines changed
                    </div>
                </div>
                {message && <div className={styles.message}>{message}</div>}
            </div>
        </div>
    );
};

export default Commit;
