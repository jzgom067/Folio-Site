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
              <DevIcons techs={item.tech_stack} />
              {/* <div>
                {item.links.map((link, i) => (
                  <>
                    <span>{i === 0 ? '' : ' '}</span>
                    <a
                      className="link"
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer external"
                    >
                      {link.name}
                    </a>
                  </>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjGrid;
