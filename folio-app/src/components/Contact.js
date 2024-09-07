// components
import SlideFadeIn from './SlideFadeIn.js';

// styling
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contact}>
    <SlideFadeIn>
      <h2 className={styles.subtitle}>Looking for my resume?</h2>
    </SlideFadeIn>
    <SlideFadeIn>
      <a
        className={styles.resume}
        href={process.env.PUBLIC_URL + "/resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Here's a copy
      </a>
    </SlideFadeIn>
    <SlideFadeIn>
      <h2>What about my email?</h2>
    </SlideFadeIn>
    <SlideFadeIn>
      <a
        className={styles.resume}
        href="mailto:jzgombic7@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send me one here
      </a>
    </SlideFadeIn>
    <SlideFadeIn>
      <div
        className={styles.resume}
        onClick={() => navigator.clipboard.writeText('jzgombic7@gmail.com')}
      >
        (Or copy the address)
      </div>
    </SlideFadeIn>
  </div>
);

export default Contact;
