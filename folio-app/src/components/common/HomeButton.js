// router
import { Link } from 'react-router-dom';

// styling
import styles from './HomeButton.module.css';
import Icon from './Icon.js';

const HomeButton = () => (
  <Link className={styles.button} to="/">
    <div className={styles.arrow}>
      <Icon name="Left Arrow" size="1.25rem" />
    </div>
    Home
  </Link>
);

export default HomeButton;