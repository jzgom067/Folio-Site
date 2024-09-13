// components
import SlideFadeIn from './SlideFadeIn.js';
import Icon from './Icon.js';

// styling
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.col}>
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
          <Icon name="External Link" stroke="lightgray" size="1em" />
        </a>
      </SlideFadeIn>
    </div>
    <div className={styles.col}>
      <SlideFadeIn>
        <h2>What about my email?</h2>
      </SlideFadeIn>
      <div>
        <SlideFadeIn>
          <a
            className={styles.linkButton}
            href="mailto:jzgombic7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch
            <Icon name="External Link" stroke="lightgray" size="1em" />
          </a>
        </SlideFadeIn>
        <SlideFadeIn>
          <div
            className={styles.or}
          >
            <hr className={styles.lineLeft}/>
            OR
            <hr className={styles.lineRight}/>
          </div>
        </SlideFadeIn>
        <SlideFadeIn>
          <div
            className={styles.copy}
            onClick={() => navigator.clipboard.writeText('jzgombic7@gmail.com')}
          >
            Copy the address
          </div>
        </SlideFadeIn>
      </div>
    </div>
  </div>
);

export default Contact;
