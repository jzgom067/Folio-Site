import DevIcon from '../modules/DevIcon.js';

const Experience = ({ jobs }) => {
  return (
    <div className="jobs">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="job"
          style={{
            animationDelay: `${(index + 1) * 0.1}s`
          }}
        >
          <div className="job-img-container">
            <img className="job-img" src={job.img} alt={job.img_alt}></img>
          </div>
          <div className="job-text">
            <div className="job-title">
              {job.name}
            </div>
            <div>
              {job.description}
            </div>
            <div className="job-date">
              {job.date_start + ' - ' + job.date_end}
            </div>
            <div className="job-icons">
              {job.tech_stack.map((tech, index) => (
                <DevIcon tech={tech} size="2.5rem" key={index} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    );
}

export default Experience;
