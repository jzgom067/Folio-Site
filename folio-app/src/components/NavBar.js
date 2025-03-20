// images
import duck from '../img/duck.svg';

// components
import Icon from './Icon.js';

// router
import { Link } from 'react-router-dom'

// styling
import styles from './NavBar.module.css';

const NavBar = () => (
  <div className={styles.navbar}>
    <Link to="/" className={styles.left}>
      <img className={styles.logo} src={duck} alt="logo" />
      <div className={styles.name}>
        <div className={styles.firstName}>Jack</div>
        <div className={styles.lastName}>Zgombic</div>
      </div>
    </Link>
    <div className={styles.right}>
      <a
        className={styles.link}
        href={process.env.PUBLIC_URL + "/Jack Zgombic Resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Resume</span>
        <Icon name="External Link" stroke="gray" size="1em"></Icon>
      </a>
      <a
        className={styles.link}
        href="https://github.com/jzgom067"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>GitHub</span>
        <Icon name="External Link" stroke="gray" size="1em"></Icon>
      </a>
      <a
        className={styles.link}
        href="https://linkedin.com/in/jack-zgombic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>LinkedIn</span>
        <Icon name="External Link" stroke="gray" size="1em"></Icon>
      </a>
    </div>
  </div>
)

export default NavBar;
