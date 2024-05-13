import banana from './img/banan.png';
import projects from './modules/projects.js';
import ProjGrid from './modules/ProjGrid.js';
import DevIcon from './modules/DevIcon.js';
import './App.css';

const allStack = [
  'Python',
  'Java',
  'C#',
  'C',
  'C++',
  'MySQL',
  'HTML',
  'Unity',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Alpine.js',
  'Tailwind CSS',
  'Visual Studio Code',
  'Blender'
]

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
        <div className="project-icons">
          {allStack.map((tech, index) => (
            <DevIcon tech={tech} size="2rem" key={index} />
          ))}
        </div>
        🦃🐓🦆🐤🐣🥚
      </footer>
    </div>
  );
}

export default App;
