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
import styles from './App.module.css';
import './Anim.css';

function App() {
  // detect when the page changes, and reset the fade in delay
  let location = useLocation();
  React.useEffect(() => {
    globals.fadeInDelay = 0;
  }, [location]);

  return (
    <div className={styles.main}>
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
