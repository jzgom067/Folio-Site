// data
import projects from '../data/projects.js';
import globals from '../data/globals.js';

// components
import DevIcon from './DevIcon.js';
import Icon from './Icon.js';

// router
import { useParams } from 'react-router-dom';

// styling
import styles from './Project.module.css';

function getProj(slug) {
  return projects.find((proj) => proj.slug === slug);
}

function Project() {
  let { proj } = useParams();
  proj = getProj(proj);

  return (
    <div className={styles.section}>
      <div className={styles.titleBar}
      >
        <div className={styles.titleBarLeft}>
          <h1
            className={styles.title}
            style={{
              animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
            }}
          >
            {proj.name}
          </h1>
          <div
            className={styles.links}
            style={{
              animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
            }}
          >
            {proj.links.map((link, i) => (
              <a
                key={i}
                className={styles.link}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.name}</span>
                <Icon name="External Link" color="gray" size="1em"></Icon>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.titleBarRight}>
          <div
            className={styles.tech}
            style={{
              animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
            }}
          >
            {proj.tech_stack.map((tech, i) => (
              <DevIcon tech={tech} size="3rem" key={i} />
            ))}
          </div>
          <span
            // className={styles.subtitle}
            style={{
              animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
            }}
          >
            {proj.date_start} - {proj.date_end}
          </span>
        </div>
      </div>
      <div className={styles.content}>
        {proj.text.map((dict, i) => (
          <div key={i}>
            <h2
              className={styles.sectionTitle}
              style={{
                animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
              }}
            >
              {dict.title}
            </h2>
            <div
              className={styles.text}
              style={{
                animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
              }}
            >
              {dict.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;