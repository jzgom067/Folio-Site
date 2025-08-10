// components
import DevIcon from '../common/DevIcon.js';
import SlideFadeIn from '../common/SlideFadeIn.js';

// react stuff
import React, { useState, useEffect } from 'react';

// styling
import styles from './Experience.module.css';
import PlaceholderImage from '../common/PlaceholderImage.js';

const Experience = ({ jobs }) => {
  let tempElem = document.createElement('div');
  tempElem.style.fontSize = 'initial';
  document.body.appendChild(tempElem);
  const rem = parseFloat(getComputedStyle(tempElem).fontSize);
  document.body.removeChild(tempElem);

  function checkSingleColumn() {
    return window.innerWidth <= 55 * rem;
  }

  const [isSingleColumn, setsingleColumn] = useState(checkSingleColumn());

  const updateVariable = () => {
    // don't need to check if the value is changed, since React won't rerender unless
    // the value has changed
    setsingleColumn(checkSingleColumn());
  };

  useEffect(() => {
    window.addEventListener('resize', updateVariable);
  })

  return (
    <div className={styles.jobs}>
      {jobs.map((job, index) => (
        <SlideFadeIn key={index}>
          <div className={styles.job}>
            <div className={styles.outline}></div>
            <div className={styles.logoContainer}>
              <PlaceholderImage
                className={styles.logo}
                src={job.logo}
                alt={job.logo_alt}
                aspectRatio="1"
              />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                {job.name}
              </div>
              <div>
                {job.subtitle}
              </div>
              <div className={styles.date}>
                {job.date_start + ' - ' + job.date_end}
              </div>
              <div className={styles.tech}>
                {job.tech_stack.map((tech, index) => (
                  <DevIcon
                    tech={tech}
                    size={isSingleColumn ? "2rem" : "2.5rem"}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </SlideFadeIn>
      ))}
    </div>
  );
}

export default Experience;
