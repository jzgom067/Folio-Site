// components
import SlideFadeIn from './SlideFadeIn.js';

// styling
import styles from './AboutMe.module.css';

var text = [
  "Hi! I'm Jack Zgombic, a current student at RPI that's pursuing a degree in Computer Science.",
];

const AboutMe = () => (
  <div className={styles.row}>
    {text.map((content, i) => (
      <SlideFadeIn key={i}>
        <p>{content}</p>
      </SlideFadeIn>
    ))}
  </div>
);

export default AboutMe;
