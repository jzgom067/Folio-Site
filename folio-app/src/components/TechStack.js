// modules
import DevIcon from './DevIcon.js';
import SlideFadeIn from './SlideFadeIn.js';

// styling
import styles from './TechStack.module.css';

var stack = {
  lang: [
    "Python",
  ],
  frames: [
    "Node.js",
  ],
  tools: [
    "Firebase",
  ]
}

const TechStack = () => {
  return (
    <div className={styles.stack}>
      <h2>Languages</h2>
      <div className={styles.icons}>
        {stack.lang.map((tech, index) => (
          <SlideFadeIn>
            <DevIcon tech={tech} size="4rem" key={index} />
          </SlideFadeIn>
        ))}
      </div>
      <h2>Libraries/Frameworks</h2>
      <div className={styles.icons}>
        {stack.frames.map((tech, index) => (
          <SlideFadeIn>
            <DevIcon tech={tech} size="4rem" key={index} />
          </SlideFadeIn>
        ))}
      </div>
      <h2>Tools/Software</h2>
      <div className={styles.icons}>
        {stack.tools.map((tech, index) => (
          <SlideFadeIn>
            <DevIcon tech={tech} size="4rem" key={index} />
          </SlideFadeIn>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
