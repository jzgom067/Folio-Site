// modules
import PlaceholderImage from '../common/PlaceholderImage.js';

// styling
import styles from './Commit.module.css';

const Commit = ({ data }) => {
    // Get only the first line of the commit message
    const summary = data.commit.message.split('\n')[0];
    const message = data.commit.message.split('\n').slice(1).join('\n');

    return (
        <div className={styles.commit}>
            <PlaceholderImage
                className={styles.avatar}
                src={data.author.avatar_url}
                alt={data.author.login}
                aspectRatio="1"
            />
            <div className={styles.text}>
                <div className={styles.titleLine}>
                    <div className={styles.summary}>
                        {summary}
                    </div>
                    <div className={styles.author}>
                        {data.author?.login || data.commit.author.name}, {new Date(data.commit.author.date).toLocaleDateString()}
                    </div>
                </div>
                {message && <div className={styles.message}>{message}</div>}
            </div>
        </div>
    );
};

export default Commit;
