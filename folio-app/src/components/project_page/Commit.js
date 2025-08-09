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
                <span>{new Date(data.timestamp).toLocaleDateString()}</span>
            </div>
        </div>
    );
};

export default Commit;
