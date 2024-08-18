// modules
import DevIcon from './DevIcon.js';
import SlideFadeIn from './SlideFadeIn.js';

// router
import { Link } from 'react-router-dom';

// styling
import styles from './ProjGrid.module.css';

const ProjGrid = ({ projects }) => {
  return (
    <div className={styles.projects}>
      {projects.map((proj, index) => (
        <SlideFadeIn>
          <Link
            key={index}
            className={styles.project}
            style={{
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
              <div className={styles.subtitle}>{proj.subtitle}</div>
              <div className={styles.tech}>
                {proj.tech_stack.map((tech, index) => (
                  <DevIcon tech={tech} size="2rem" key={index} />
                ))}
              </div>
            </div>
          </Link>
        </SlideFadeIn>
      ))}
    </div>
  );
}

export default ProjGrid;
