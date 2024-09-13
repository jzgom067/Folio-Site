// scroll animation
import ScrollAnimation from 'react-animate-on-scroll';

const SlideFadeIn = (props) => {
  return (
    <ScrollAnimation
      offset="50"
      animateIn="slideFadeIn"
      animateOnce={true}
    >
      {props.children}
    </ScrollAnimation>
  );
}

export default SlideFadeIn;
