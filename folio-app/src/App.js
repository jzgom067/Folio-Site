// react
import React from 'react';

// components
import NavBar from './components/NavBar.js';
import Content from './components/Content.js';

// router
import { useLocation } from 'react-router-dom';

// styling
import styles from './App.module.css';

function App() {
  // detect when the page changes, and reset the fade in delay
  let location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={styles.main}>
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
