// components
import SlideFadeIn from './SlideFadeIn.js';
import PlaceholderImage from './PlaceholderImage.js';

// styling
import styles from './AboutMe.module.css';

// images
import me from '../img/me.jpg';
import cutout from '../img/me cutout.png';

var text = [
  "Hi! I'm Jack Zgombic, a current undergrad at RPI pursuing a dual degree in Computer Science and Information Technology & Web Science.",
  "Stemming from a childhood of video games, I'm drawn to the creative problem solving involved in programming. Many would say my passion started in 10th grade with Computer Science 1, but the real beginning was trying to code snake on my TI-84 in middle school.",
  "I guess it's only natural that I would make my own original game years later.",
  "When away from the computer, I spend my time practicing diabolo tricks and learning photography.",
];

const AboutMe = () => (
  <div className={styles.row}>
    <div className={styles.picContainerContainer}>
      <SlideFadeIn>
        <div className={styles.picContainer}>
          <PlaceholderImage
            src={me}
            className={styles.pic}
            aspectRatio="3 / 4"
          />
          <div className={styles.firstName}>
            <SlideFadeIn>
              Jack
            </SlideFadeIn>
          </div>
          <div className={styles.lastName}>
            <SlideFadeIn>
              Zgombic
            </SlideFadeIn>
          </div>
          <PlaceholderImage
            src={cutout}
            className={styles.cutout}
            aspectRatio="3 / 4"
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
