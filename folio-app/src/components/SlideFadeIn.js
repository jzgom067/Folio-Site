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
        animQueue.sort((a, b) => {
          if (a.top === b.top) {
            return a.left - b.left;
          }
          return a.top - b.top;
        });
        const { element } = animQueue.shift();
        element.classList.add(styles.anim);
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
    const refTemp = ref;
    const observer = new IntersectionObserver((elems) => {
      elems.forEach(elem => {
        if (elem.isIntersecting) {
          const rect = elem.target.getBoundingClientRect();
          animQueue.push({
            element: elem.target,
            top: rect.top,
            left: rect.left
          });
          startInterval();
          observer.unobserve(elem.target);
        }
      });
    });

    if (refTemp.current) {
      observer.observe(refTemp.current);
    }

    return () => {
      if (refTemp.current) {
        observer.unobserve(refTemp.current);
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
