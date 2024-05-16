// data
import projects from './data/projects.js';
import jobs from './data/jobs.js';

// modules
import ProjGrid from './modules/ProjGrid.js';
import Icon from './modules/Icon.js';
import Experience from './modules/Experience.js';
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
      {/* <div className="section">
        <h1 className="section-title">About Me</h1>
      </div> */}
      <div className="section">
        <h1 className="section-title">Projects</h1>
        <ProjGrid projects={projects} />
      </div>
      <div className="section">
        <h1 className="section-title">Experience</h1>
        <Experience jobs={jobs}></Experience>
      </div>
      {/* <div className="section">
        <h1 className="section-title">Tech Stack</h1>
      </div> */}
      <footer>
        🦃🐓🦆🐤🐣🥚
      </footer>
    </div>
  );
}

export default App;
