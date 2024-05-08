import banana from './banan.png';
import './App.css';

const ProjGrid = ({ items }) => {
  return (
    <div className="projects">
      {items.map((item, index) => (
        <div key={index} className="project">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <a
            className="link"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer external"
          >
            {item.link_name}
          </a>
        </div>
      ))}
    </div>
  );
}

const items = [
  {
    name: 'Super Golf',
    description: "A golf game.",
    link: 'https://jzgombic.itch.io/golf',
    link_name: 'itch.io'
  },
  {
    name: 'CARPI Bot',
    description: "A Discord bot tailored for RPI students.",
    link: 'https://github.com/SameriteRL/CARPI-Bot',
    link_name: 'GitHub'
  },
  {
    name: 'This Website...?',
    description: "Not much here at the moment.",
    link: 'https://github.com/jzgom067/Folio-Site',
    link_name: 'GitHub'
  },
  {
    name: 'More to come...',
    description: "",
    link: '',
    link_name: ''
  }
]

function App() {
  return (
    <div className="main">
      <header className="header">
        <img src={banana} className="logo" alt="logo" />
        <p className="text">
          👋
        </p>
      </header>
      <ProjGrid items={items} />
      <footer className = "footer">
        footer
      </footer>
    </div>
  );
}

export default App;
