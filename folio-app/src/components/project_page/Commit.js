// modules
import Icon from '../common/Icon.js';
import PlaceholderImage from '../common/PlaceholderImage.js';

// react stuff
import { useEffect, useRef } from 'react';

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

function multilineTruncate(element, originalMsg, lines) {
    const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
    const maxHeight = lineHeight * lines;
    element.textContent = originalMsg;
    let text = originalMsg;

    let truncated = false;
    while (element.clientHeight > maxHeight && text.length > 0) {
        text = text.slice(0, -1);
        element.textContent = text + '…';
        truncated = true;
    }
    if (truncated && text.length > 0) {
        // Remove an extra character just to be safe
        text = text.slice(0, -1);
        element.textContent = text + '…';
    }
}

const Commit = ({ data }) => {
    // Get only the first line of the commit message
    const summary = data.message.split('\n')[0];
    const message = data.message.split('\n').slice(1).join('\n');

    const messageRef = useRef(null);
    useEffect(() => {
        function truncate() {
            if (messageRef.current) {
                multilineTruncate(messageRef.current, message, 2);
            }
        }
        truncate();

        window.addEventListener('resize', truncate);
        return () => {
            window.removeEventListener('resize', truncate);
        };
    }, [message]);

    return (
        <a
            className={styles.commit}
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
        >
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
                            <Icon name="External Link" stroke="gray" size="1em" />
                        </div>
                        {message &&
                            <div className={styles.message} ref={messageRef}>
                                {message}
                            </div>
                        }
                    </div>
                    <div className={styles.linesChanged}>
                        <span className={styles.additions}>+{data.stats.additions}</span>
                        <span className={styles.deletions}>-{data.stats.deletions}</span>
                    </div>
                </div>
            </div>
            <div className={styles.footerRow}>
                <span>@{data.author_name}{data.repo && <> - {data.repo}</>}</span>
                <span className={styles.timeAgo}>{timeAgo(data.timestamp)}</span>
            </div>
        </a>
    );
};

export default Commit;
