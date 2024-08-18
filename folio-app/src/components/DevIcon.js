// components
import Icon from './Icon.js';

// styling
import styles from './DevIcon.module.css';

const DevIcon = ({ tech, size }) => (
  <div
    className={styles.container}
    style = {{
      height: size,
      width: size
    }}
  >
    <div className={styles.icon}>
      <Icon name={tech} size={size}></Icon>
    </div>
    <div className={styles.tooltip}>{tech}</div>
  </div>
)

export default DevIcon;
