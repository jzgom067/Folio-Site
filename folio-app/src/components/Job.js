// data
import jobs from '../data/jobs.js';

// router
import { useParams } from 'react-router-dom';

function getProj(slug) {
  return jobs.find((job) => job.slug === slug);
}

function Project() {
  let { job } = useParams();
  job = getProj(job);

  return (
    <div>{job.name}</div>
  );
};

export default Project;