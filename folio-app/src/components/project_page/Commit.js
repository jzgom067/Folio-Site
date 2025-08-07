// modules
import PlaceholderImage from '../common/PlaceholderImage.js';

// styling
import styles from './Commit.module.css';

const GitHubCommit = ({ data }) => {
// Get only the first line of the commit message
const firstLine = data.commit.message.split('\n')[0];

return (
    <div className={styles.commit}>
        {firstLine}
        <div>
            {data.commit.author.name} - {new Date(data.commit.author.date).toLocaleString()}
        </div>
    </div>
);
};

export default GitHubCommit;
