import Icon from './Icon.js';

const NavBar = () => (
  <div className="nav-bar">
    <div className="name">
      Jack Zgombic
    </div>
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
)

export default NavBar;
