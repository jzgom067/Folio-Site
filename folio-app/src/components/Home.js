// global variables
import globals from '../data/globals.js';

// data
import projects from '../data/projects.js';
import jobs from '../data/jobs.js';

// modules
import ProjGrid from './ProjGrid.js';
import Experience from './Experience.js';

// styling
import styles from './Home.module.css';

const Home = () => (
  <>
    {/* <div className="section">
      <h1 className="section-title">About Me</h1>
    </div> */}
    <div className={styles.section}>
      <h1 
        className={styles.sectionTitle}
        style={{
          animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
        }}
      >
        Projects
      </h1>
      <ProjGrid projects={projects} />
    </div>
    <div className={styles.section}>
      <h1 
        className={styles.sectionTitle}
        style={{
          animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
        }}
      >
        Experience
      </h1>
      <Experience jobs={jobs} />
    </div>
    {/* <div className="section">
      <h1 className="section-title">Tech Stack</h1>
    </div> */}
  </>
);

export default Home;