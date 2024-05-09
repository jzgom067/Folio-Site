import banana from './img/banan.png';
import projects from './modules/projects.js';
import ProjGrid from './modules/ProjGrid.js';
import DevIcons from './modules/DevIcons.js';
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
        <DevIcons techs={allStack} />
        🦃🐓🦆🐤🐣🥚
      </footer>
    </div>
  );
}

export default App;
