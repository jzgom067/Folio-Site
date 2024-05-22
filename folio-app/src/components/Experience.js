// globals
import globals from '../data/globals.js';

// components
import DevIcon from '../components/DevIcon.js';

// react stuff
import React, { useState, useEffect } from 'react';

// router
import { Link } from 'react-router-dom';

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
    <div className="jobs">
      {jobs.map((job, index) => (
        <Link
          key={index}
          className="job"
          style={{
            animationDelay: `${globals.fadeInDelay++ * 0.1}s`
          }}
          to={"/experience/" + job.slug}
        >
          <div className="job-outline"></div>
          <div className="job-logo-container">
            <img className="job-logo" src={job.logo} alt={job.logo_alt}></img>
          </div>
          <div className="job-text">
            <div className="job-title">
              {job.name}
            </div>
            <div>
              {job.subtitle}
            </div>
            <div className="job-date">
              {job.date_start + ' - ' + job.date_end}
            </div>
            <div className="job-icons">
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
