// data
import projects from '../data/projects.js';
import jobs from '../data/jobs.js';

// components
import ProjGrid from './ProjGrid.js';
import Experience from './Experience.js';
import SlideFadeIn from './SlideFadeIn.js';

// styling
import styles from './Home.module.css';

const Home = () => (
  <>
    {/* <div className="section">
      <h1 className="section-title">About Me</h1>
    </div> */}
    <div className={styles.section}>
      <SlideFadeIn>
        <h1
          className={styles.sectionTitle}
        >
          Projects
        </h1>
      </SlideFadeIn>
      <ProjGrid projects={projects} />
    </div>
    <div className={styles.section}>
      <SlideFadeIn>
        <h1
          className={styles.sectionTitle}
        >
          Experience
        </h1>
      </SlideFadeIn>
      <Experience jobs={jobs} />
    </div>
    {/* <div className="section">
      <h1 className="section-title">Tech Stack</h1>
    </div> */}
  </>
);

export default Home;