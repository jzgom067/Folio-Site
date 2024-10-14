// components
import SlideFadeIn from './SlideFadeIn.js';

// styling
import styles from './AboutMe.module.css';

var text = [
  "I'm a current undergrad at RPI pursuing a degree in Computer Science, with a minor in Information Technology & Web Science.",
  "Stemming from a childhood of video games, I'm drawn to the creative problem-solving involved in programming. It's easy to think that 10th grade Computer Science 1 was the spark, but it really started with trying to code Snake on my TI-84 in middle school.",
  "I guess it's only natural that I would make my own original game years later.",
  "When away from the computer, I spend my time practicing diabolo tricks and learning about photography.",
];

const AboutMe = () => (
  <div className={styles.row}>
    <div className={styles.picContainerContainer}>
      <SlideFadeIn>
        <div className={styles.picContainer}>
          <img
            src="/me.jpeg"
            alt="portrait background"
            className={styles.pic}
          />
          <div className={styles.firstName}>
            <SlideFadeIn>
              <img src="/jack.svg" alt="jack" className={styles.firstNameSvg} />
            </SlideFadeIn>
          </div>
          <div className={styles.lastName}>
            <SlideFadeIn>
              <img src="/zgombic.svg" alt="zgombic" className={styles.lastNameSvg} />
            </SlideFadeIn>
          </div>
          <img
            src="/cutout.png"
            alt="portrait cutout"
            className={styles.cutout}
          />
        </div>
      </SlideFadeIn>
    </div>
    <div className={styles.text}>
      {text.map((content, i) => (
        <SlideFadeIn key={i}>
          <p>{content}</p>
        </SlideFadeIn>
      ))}
    </div>
    <div className={styles.picClear}></div>
  </div>
);

export default AboutMe;
