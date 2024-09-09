// components
import SlideFadeIn from './SlideFadeIn.js';

// styling
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.row}>
      <SlideFadeIn>
        <h2>Looking for my resume?</h2>
      </SlideFadeIn>
      <SlideFadeIn>
        <a
          className={styles.linkButton}
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's a copy
        </a>
      </SlideFadeIn>
    </div>
    <div className={styles.row}>
      <SlideFadeIn>
        <h2>What about my email?</h2>
      </SlideFadeIn>
      <SlideFadeIn>
        <a
          className={styles.linkButton}
          href="mailto:jzgombic7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send me one here
        </a>
      </SlideFadeIn>
      <SlideFadeIn>
        <div
          className={styles.copy}
          onClick={() => navigator.clipboard.writeText('jzgombic7@gmail.com')}
        >
          (Or copy the address)
        </div>
      </SlideFadeIn>
    </div>
  </div>
);

export default Contact;
