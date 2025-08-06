// data
import projects from '../../data/projects.js';
import jobs from '../../data/jobs.js';

// components
import AboutMe from './AboutMe.js';
import ProjGrid from './ProjectGrid.js';
import Experience from './Experience.js';
import TechStack from './TechStack.js';
import SlideFadeIn from '../common/SlideFadeIn.js';
import Contact from './Contact.js';

// styling
import styles from './Home.module.css';

const Home = () => (
  <>
    <div className={styles.section}>
      <AboutMe/>
    </div>
    <div className={styles.section}>
      <SlideFadeIn>
        <h1 className={styles.sectionTitle}>
          Projects
        </h1>
      </SlideFadeIn>
      <ProjGrid projects={projects} />
    </div>
    <div className={styles.section}>
      <SlideFadeIn>
        <h1 className={styles.sectionTitle}>
          Experience
        </h1>
      </SlideFadeIn>
      <Experience jobs={jobs} />
    </div>
    <div className={styles.section}>
      <SlideFadeIn>
        <h1 className={styles.sectionTitle}>
          Expertise
        </h1>
      </SlideFadeIn>
      <TechStack />
    </div>
    <div className={styles.section}>
      <SlideFadeIn>
        <h1 className={styles.sectionTitle}>
          Contact
        </h1>
      </SlideFadeIn>
      <Contact />
    </div>
    <div className={styles.footer}>
      Made with React over Summer 2024.
    </div>
  </>
);

export default Home;