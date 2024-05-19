// globals
import globals from '../data/globals.js';

// modules
import DevIcon from './DevIcon.js';

// react stuff
import React, { useState, useEffect } from 'react';

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
        <a
          key={index}
          className="job"
          style={{
            animationDelay: `${globals.fadeInDelay++ * 0.1}s`
          }}
          href={job.links[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="job-img-container">
            <img className="job-img" src={job.img} alt={job.img_alt}></img>
          </div>
          <div className="job-text">
            <div className="job-title">
              {job.name}
            </div>
            <div>
              {job.description}
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
        </a>
      ))}
    </div>
    );
}

export default Experience;
