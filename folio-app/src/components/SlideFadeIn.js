// react
import { useRef, useEffect } from 'react';

// styling
import styles from './SlideFadeIn.module.css';

const animQueue = [];
let animInterval = null;

const delay = 100; // milliseconds

const startInterval = () => {
  if (!animInterval) {
    animInterval = setInterval(() => {
      if (animQueue.length > 0) {
        const element = animQueue.shift();
        element.classList.add(styles.anim);
        console.log("something animated");
      } else {
        clearInterval(animInterval);
        animInterval = null;
      }
    }, delay);
  }
}

const SlideFadeIn = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((elems) => {
      elems.forEach(elem => {
        if (elem.isIntersecting) {
          animQueue.push(elem.target);
          startInterval();
          observer.unobserve(elem.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      className={styles.toBeAnimated}
    >
      {props.children}
    </div>
  );
}

export default SlideFadeIn;
