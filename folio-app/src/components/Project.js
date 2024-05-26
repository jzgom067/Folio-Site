// data
import projects from '../data/projects.js';

// components
import DevIcon from './DevIcon.js';

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
      <h1>
        {proj.name}
      </h1>
      <div className={styles.tech}>
        {proj.tech_stack.map((tech, i) => (
          <DevIcon tech={tech} size="4rem" key={i} />
        ))}
      </div>
      <div className={styles.text}>
        {proj.text.map((dict, i) => (
          <div key={i}>
            <h2>{dict.title}</h2>
            <div>{dict.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;