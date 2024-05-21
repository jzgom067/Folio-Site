// globals
import globals from '../data/globals.js'

// modules
import DevIcon from './DevIcon.js';

// router
import { Link } from 'react-router-dom';

const ProjGrid = ({ projects }) => {
  return (
    <div className="projects">
      {projects.map((proj, index) => (
        <Link
          key={index}
          className="project"
          style={{
            animationDelay: `${globals.fadeInDelay++ * 0.1}s`,
            zIndex: `${projects.length - index}`
          }}
          to={"/project/" + proj.slug}
        >
          <div className="project-outline"></div>
          <div className="project-img-container">
            <img src={proj.img} className="project-img" alt={proj.img_alt} />
          </div>
          <div className="project-text">
            <div className="project-title">{proj.name}</div>
            <div>{proj.description}</div>
            <div className="project-date">{proj.date_start} - {proj.date_end}</div>
            <div className="project-icons">
              {proj.tech_stack.map((tech, index) => (
                <DevIcon tech={tech} size="2rem" key={index} />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjGrid;
