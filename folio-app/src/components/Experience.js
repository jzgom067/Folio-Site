// components
import DevIcon from '../components/DevIcon.js';
import SlideFadeIn from './SlideFadeIn.js';

// react stuff
import React, { useState, useEffect } from 'react';

// router
import { Link } from 'react-router-dom';

// styling
import styles from './Experience.module.css';
import PlaceholderImage from './PlaceholderImage.js';

const Experience = ({ jobs }) => {
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

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
        <SlideFadeIn>
          <Link
            key={index}
            className={styles.job}
            to={"/experience/" + job.slug}
          >
            <div className={styles.outline}></div>
            <div className={styles.logoContainer}>
              <PlaceholderImage
                className={styles.logo}
                src={job.logo}
                alt={job.logo_alt}
                width={isSingleColumn ? "7.5rem" : "9.75rem"}
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
          </Link>
        </SlideFadeIn>
      ))}
    </div>
    );
}

export default Experience;
