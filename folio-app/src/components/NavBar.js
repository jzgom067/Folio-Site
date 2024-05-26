import Icon from './Icon.js';

// router
import { Link } from 'react-router-dom'

// styling
import styles from './NavBar.module.css';

const NavBar = () => (
  <div className={styles.navbar}>
    <div className={styles.left}>
      <div className={styles.name}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Jack Zgombic
        </Link>
      </div>
    </div>
    <div className={styles.right}>
      <a
        className={styles.link}
        href="https://github.com/jzgom067"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>GitHub</span>
        <Icon name="External Link" color="gray" size="1em"></Icon>
      </a>
      <a
        className={styles.link}
        href="https://linkedin.com/in/jack-zgombic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>LinkedIn</span>
        <Icon name="External Link" color="gray" size="1em"></Icon>
      </a>
    </div>
  </div>
)

export default NavBar;
