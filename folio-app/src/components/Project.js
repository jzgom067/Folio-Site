// data
import projects from '../data/projects.js';

// components
import DevIcon from './DevIcon.js';

// router
import { useParams } from 'react-router-dom';

function getProj(slug) {
  return projects.find((proj) => proj.slug === slug);
}

function Project() {
  let { proj } = useParams();
  proj = getProj(proj);

  return (
    <div className="section">
      <h1 className="section-title">
        {proj.name}
      </h1>
      <div className="project-tech">
        {proj.tech_stack.map((tech, i) => (
          <DevIcon tech={tech} size="4rem" key={i} />
        ))}
      </div>
      <div className="project-page-text">
        <h2>What is {proj.name}?</h2>
        <div>{proj.text.description}</div>
        <h2>What did I contribute?</h2>
        <div>{proj.text.contributions}</div>
        <h2>What did I learn?</h2>
        <div>{proj.text.learned}</div>
        <h2>What challenges did I face?</h2>
        <div>{proj.text.challenges}</div>
        <h2>What's next?</h2>
        <div>{proj.text.next}</div>
      </div>
    </div>
  );
};

export default Project;