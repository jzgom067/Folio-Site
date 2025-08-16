// modules
import DevIcon from '../common/DevIcon.js';
import SlideFadeIn from '../common/SlideFadeIn.js';
import PlaceholderImage from '../common/PlaceholderImage.js';

// router
import { Link } from 'react-router-dom';

// styling
import styles from './ProjectGrid.module.css';

const ProjGrid = ({ projects }) => {
  const tagColors = {
    'Website': '#22948e',
    'Mobile App': '#cf864b',
    'Game': '#d34747',
    'Discord App': '#5865F2'
  };

  return (
    <div className={styles.projects}>
      {projects.map((proj, index) => (
        <div
          style={{
            zIndex: `${projects.length - index}`
          }}
        >
          <SlideFadeIn>
            <Link
              key={index}
              className={styles.project}
              to={"/project/" + proj.slug}
            >
              <div className={styles.outline}></div>
              <div className={styles.logoContainer}>
                <PlaceholderImage
                  src={proj.logo}
                  className={styles.logo}
                  alt={proj.logo_alt}
                  aspectRatio="1"
                />
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
              <div className={styles.tags}>
                {proj.tags.map((tag, index) => (
                  <div
                    key={index}
                    className={styles.tag}
                    style={{ backgroundColor: tagColors[tag] }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </Link>
          </SlideFadeIn>
        </div>
      ))}
    </div>
  );
}

export default ProjGrid;
