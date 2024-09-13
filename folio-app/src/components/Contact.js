// components
import SlideFadeIn from './SlideFadeIn.js';
import Icon from './Icon.js';
import EmailCopy from './EmailCopy.js';

// styling
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.col}>
      <SlideFadeIn>
        <h2 className={styles.emailHeader}>Looking for my resume?</h2>
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
        <h2>Want to get in touch?</h2>
      </SlideFadeIn>
      <div>
        <SlideFadeIn>
          <a
            className={styles.linkButton}
            href="mailto:jzgombic7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send an email
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
          <EmailCopy />
        </SlideFadeIn>
      </div>
    </div>
  </div>
);

export default Contact;
