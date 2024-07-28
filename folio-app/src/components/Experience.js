// globals
import globals from '../data/globals.js';

// components
import DevIcon from '../components/DevIcon.js';

// react stuff
import React, { useState, useEffect } from 'react';

// router
import { Link } from 'react-router-dom';

// styling
import styles from './Experience.module.css';

const Experience = ({ jobs }) => {
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

  const [devIconWidth, setDevIconWidth] = useState('2.5rem');

  const updateVariable = () => {
    if (window.innerWidth <= 55 * rem) {
      setDevIconWidth('2rem');
    } else {
      setDevIconWidth('2.5rem');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateVariable);
    updateVariable();
  })

  return (
    <div className={styles.jobs}>
      {jobs.map((job, index) => (
        <Link
          key={index}
          className={styles.job}
          style={{
            animationDelay: `${globals.fadeInDelay++ * 0.1}s`
          }}
          to={"/experience/" + job.slug}
        >
          <div className={styles.outline}></div>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={job.logo} alt={job.logo_alt}></img>
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              {job.name}
            </div>
            <div className={styles.subtitle}>
              {job.subtitle}
            </div>
            <div className={styles.tech}>
              {job.tech_stack.map((tech, index) => (
                <DevIcon tech={tech} size={devIconWidth} key={index} />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
    );
}

export default Experience;
