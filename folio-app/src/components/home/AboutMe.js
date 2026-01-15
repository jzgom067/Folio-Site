// components
import SlideFadeIn from '../common/SlideFadeIn.js';

// styling
import styles from './AboutMe.module.css';

var text = [
  "I'm an RPI graduate with a bachelor's in Computer Science and a minor in Information Technology & Web Science.",
  "The creative problem-solving involved in programming is what motivates me to write robust and maintainable code. I may have experience with a variety of technology now, but my career peaked when coding Snake on my TI-84 in middle school.",
  "When away from the computer, I enjoy exploring photography and have recently developed a strong interest in cooking."
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
