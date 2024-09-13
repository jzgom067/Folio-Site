// globals
import globals from '../data/globals.js'

// styling
import styles from './SlideFadeIn.module.css';

const SlideFadeIn = (props) => {
  return (
    <div
      className={styles.anim}
      style={{
        animationDelay: `${(globals.fadeInDelay++) * 0.1}s`
      }}
    >
      {props.children}
    </div>
  );
}

export default SlideFadeIn;
