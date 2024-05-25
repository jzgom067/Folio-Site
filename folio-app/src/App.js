// react
import React from 'react';

// data
import globals from './data/globals.js';

// components
import NavBar from './components/NavBar.js';
import Content from './components/Content.js';

// router
import { useLocation } from 'react-router-dom';

// styling
import './App.css';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    globals.fadeInDelay = 0;
  }, [location]);

  return (
    <div className="main">
      <NavBar />
      <Content />
      <footer>
        🦃🐓🦆🐤🐣🥚
      </footer>
    </div>
  );
}

export default App;
