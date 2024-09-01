// modules
import DevIcon from './DevIcon.js';
import SlideFadeIn from './SlideFadeIn.js';

// styling
import styles from './TechStack.module.css';

var stack = {
  lang: [
    "Python",
    "C#",
    "Java",
    "MySQL",
    "C",
    "C++",
    "Looker/LookML",
    "HTML",
    "CSS",
    "JavaScript",
    "Dart",
  ],
  frames: [
    "Alpine.js",
    "Tailwind CSS",
    "React",
    "Node.js",
    "Flutter",
  ],
  tools: [
    "Visual Studio Code",
    "Unity",
    "Blender",
    "Firebase",
  ]
}

const TechStack = () => {
  return (
    <div className={styles.stack}>
      <div style={{ zIndex: "5" }}>
        <SlideFadeIn>
          <h2>Languages</h2>
        </SlideFadeIn>
      </div>
      <div style={{ zIndex: "4" }}>
        <SlideFadeIn>
          <div className={styles.icons}>
            {stack.lang.map((tech, index) => (
              <DevIcon tech={tech} size="4rem" key={index} />
            ))}
          </div>
        </SlideFadeIn>
      </div>
      <div style={{ zIndex: "3" }}>
        <SlideFadeIn>
          <h2>Libraries/Frameworks</h2>
        </SlideFadeIn>
      </div>
      <div style={{ zIndex: "2" }}>
        <SlideFadeIn>
          <div className={styles.icons}>
            {stack.frames.map((tech, index) => (
              <DevIcon tech={tech} size="4rem" key={index} />
            ))}
          </div>
        </SlideFadeIn>
      </div>
      <div style={{ zIndex: "1" }}>
        <SlideFadeIn>
          <h2>Tools/Software</h2>
        </SlideFadeIn>
      </div>
      <div style={{ zIndex: "0" }}>
        <SlideFadeIn>
          <div className={styles.icons}>
            {stack.tools.map((tech, index) => (
              <DevIcon tech={tech} size="4rem" key={index} />
            ))}
          </div>
        </SlideFadeIn>
      </div>
    </div>
  );
}

export default TechStack;
