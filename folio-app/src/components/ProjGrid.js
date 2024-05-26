// globals
import globals from '../data/globals.js'

// modules
import DevIcon from './DevIcon.js';

// router
import { Link } from 'react-router-dom';

// styling
import styles from './ProjGrid.module.css';

const ProjGrid = ({ projects }) => {
  return (
    <div className={styles.projects}>
      {projects.map((proj, index) => (
        <Link
          key={index}
          className={styles.project}
          style={{
            animationDelay: `${globals.fadeInDelay++ * 0.1}s`,
            zIndex: `${projects.length - index}`
          }}
          to={"/project/" + proj.slug}
        >
          <div className={styles.outline}></div>
          <div className={styles.logoContainer}>
            <img src={proj.logo} className={styles.logo} alt={proj.logo_alt} />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>{proj.name}</div>
            <div>{proj.subtitle}</div>
            <div className={styles.date}>{proj.date_start} - {proj.date_end}</div>
            <div className={styles.tech}>
              {proj.tech_stack.map((tech, index) => (
                <DevIcon tech={tech} size="2rem" key={index} />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjGrid;
