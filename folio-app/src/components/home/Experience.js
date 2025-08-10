// components
import DevIcon from '../common/DevIcon.js';
import SlideFadeIn from '../common/SlideFadeIn.js';

// styling
import styles from './Experience.module.css';
import PlaceholderImage from '../common/PlaceholderImage.js';

const Experience = ({ jobs }) => {
  return (
    <div className={styles.jobs}>
      {jobs.map((job, index) => (
        <SlideFadeIn key={index}>
          <div className={styles.job}>
            <div className={styles.logoContainer}>
              <PlaceholderImage
                className={styles.logo}
                src={job.logo}
                alt={job.logo_alt}
                aspectRatio="1"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.titleBar}>
                <div className={styles.title}>
                  {job.name}
                  <div className={styles.subtitle}>
                    {job.subtitle}, {job.date_start} - {job.date_end}
                  </div>
                </div>
                <div className={styles.tech}>
                  {job.tech_stack.map((tech, i) => (
                    <DevIcon tech={tech} size="2.5rem" key={i} />
                  ))}
                </div>
              </div>
              <hr className={styles.divider} />
              <div className={styles.bullets}>
                {job.bullets.map((bullet, i) => (
                  <div key={i} className={styles.bullet}>
                    <span>• {bullet}</span>
                  </div>
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
