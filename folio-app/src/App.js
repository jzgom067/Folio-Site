import banana from './img/banan.png';
import projects from './modules/projects.js';
import ProjGrid from './modules/ProjGrid.js';
import './App.css';

function App() {
  return (
    <div className="main">
      <header>
        <img src={banana} className="logo" alt="logo" />
        <div className="name">
          Jack Zgombic
        </div>
      </header>
      <h1 className="section-title">Projects</h1>
      <ProjGrid items={projects} />
      <footer>
        🦃🐓🦆🐤🐣🥚
      </footer>
    </div>
  );
}

export default App;
