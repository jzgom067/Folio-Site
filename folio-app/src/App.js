import banana from './banan.png';
import supergolf from './supergolf.png';
import carpi from './carpi.png';
import './App.css';

const ProjGrid = ({ items }) => {
  return (
    <div className="projects">
      {items.map((item, index) => (
        <div className="project">
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
      <div className="project">
        <h3>More to come...</h3>
      </div>
    </div>
  );
}

const items = [
  {
    name: 'Super Golf',
    description: "A 3D golf game made in Unity.",
    link: 'https://jzgombic.itch.io/golf',
    link_name: 'itch.io',
    img: supergolf,
    img_alt: 'golf'
  },
  {
    name: 'CARPI Bot',
    description: "A Discord bot tailored for RPI students.",
    link: 'https://github.com/SameriteRL/CARPI-Bot',
    link_name: 'GitHub',
    img: carpi,
    img_alt: 'carpi'
  },
  {
    name: 'This Website',
    description: "Not much here yet...",
    link: 'https://github.com/jzgom067/Folio-Site',
    link_name: 'GitHub',
    img: banana,
    img_alt: 'banana'
  }
]

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
      <ProjGrid items={items} />
      <footer className = "footer">
        🦃🐓🦆🐤🐣🥚
      </footer>
    </div>
  );
}

export default App;
