import banana from './banan.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banana} className="App-logo" alt="logo" />
        <p className="App-text">
          👋
        </p>
        <a
          className="App-link"
          href="https://jzgombic.itch.io/golf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Golf
        </a>
      </header>
    </div>
  );
}

export default App;
