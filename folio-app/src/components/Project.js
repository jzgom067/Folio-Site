// data
import projects from '../data/projects.js';

// router
import { useParams } from 'react-router-dom';

function getProj(slug) {
  return projects.find((proj) => proj.slug === slug);
}

function Project() {
  let { proj } = useParams();
  proj = getProj(proj);

  return (
    <div>{proj.name}</div>
  );
};

export default Project;