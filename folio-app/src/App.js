import banana from './banan.png';
import projects from './projects.js';
import './App.css';

const ProjGrid = ({ items }) => {
  return (
    <div className="projects">
      {items.map((item, index) => (
        <div
          className="project"
          style={{ animationDelay: `${(index + 1) * 0.1}s` }}
        >
          <div className="project-content">
            <div className="project-img-container">
              <img src={item.img} className="project-img" alt={item.img_alt} />
            </div>
            <div className="project-text">
              <div className="project-title">{item.name}</div>
              <div className="project-desc">{item.description}</div>
              <a
                className="link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer external"
              >
                {item.link_name}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <header className="header">
        <img src={banana} className="logo" alt="logo" />
        <div className="name">
          Jack Zgombic
        </div>
      </header>
      <h1 className="section-title">Projects</h1>
      <ProjGrid items={projects} />
      <footer className = "footer">
        🦃🐓🦆🐤🐣🥚
      </footer>
    </div>
  );
}

export default App;
