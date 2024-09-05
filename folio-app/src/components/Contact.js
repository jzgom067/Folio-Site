// components
// import SlideFadeIn from './SlideFadeIn.js';

// styling
// import styles from './Home.module.css';

const Contact = () => (
  <div>
    <h2>Looking for my resume?</h2>
    <a
      href={process.env.PUBLIC_URL + "/resume.pdf"}
      target="_blank"
      rel="noopener noreferrer"
    >
      Here's a copy
    </a>
  </div>
);

export default Contact;
