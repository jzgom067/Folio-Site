import Icon from './Icon.js';

// router
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div className="navbar">
    <div className="navbar-left">
      <div className="name">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Jack Zgombic
        </Link>
      </div>
    </div>
    <div className="navbar-right">
      <a
        className="profile-link"
        href="https://github.com/jzgom067"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>GitHub</span>
        <Icon name="External Link" color="gray" size="1em"></Icon>
      </a>
      <a
        className="profile-link"
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
