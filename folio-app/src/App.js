import projects from './modules/projects.js';
import ProjGrid from './modules/ProjGrid.js';
import Icon from './modules/Icon.js';
import './App.css';

function App() {
  return (
    <div className="main">
      <header>
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
      </header>
      <h1 className="section-title">Projects</h1>
      <ProjGrid projects={projects} />
      <footer>
        🦃🐓🦆🐤🐣🥚
      </footer>
    </div>
  );
}

export default App;
