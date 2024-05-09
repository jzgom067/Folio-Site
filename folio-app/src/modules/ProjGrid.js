import DevIcons from './DevIcons.js';

const ProjGrid = ({ items }) => {
  return (
    <div className="projects">
      {items.map((item, index) => (
        <div
          key={index}
          className="project"
          style={{ animationDelay: `${(index + 1) * 0.1}s` }}
        >
          <div className="project-content">
            <div className="project-img-container">
              <img src={item.img} className="project-img" alt={item.img_alt} />
            </div>
            <div className="project-text">
              <div className="project-title">{item.name}</div>
              <div>{item.description}</div>
              <div className="project-date">{item.date_start} - {item.date_end}</div>
              <DevIcons techs={item.tech_stack} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjGrid;
