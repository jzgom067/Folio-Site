import { useState, useRef, useEffect } from "react";
import styles from "./PlaceholderImage.module.css";

function findAncestorBackground(element) {
  if (!element || element === document) return null;
  const bgColor = window.getComputedStyle(element).backgroundColor;
  if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
    return bgColor;
  }
  return findAncestorBackground(element.parentElement);
}

function PlaceholderImage({
  className,
  src,
  alt,
  width,
  height,
  aspectRatio,
  tempStyle
}) {
  const [isLoaded, onLoad] = useState(false);
  const [bgColor, setBgColor] = useState(null);
  const self = useRef(null);

  // async function loadImg() {
  //   await new Promise(res => setTimeout(res, 5000));
  //   onLoad(true);
  // }

  // loadImg();

  useEffect(() => {
    if (self.current) {
      setBgColor(findAncestorBackground(self.current));
    }
  }, []);

  return (
    <>
      {!isLoaded &&
        <div style={isLoaded ? null : tempStyle} className={className}>
          <div
            style={{
              width: width,
              height: height,
              aspectRatio: aspectRatio,
              backgroundColor: bgColor,
            }}
            className={styles.placeholder}
          />
        </div>
      }
      <img
        ref={self}
        style={isLoaded ? {} : { display: 'none' }}
        className={className}
        src={src}
        alt={alt}
        onLoad={() => onLoad(true)}
      />
    </>
  );
}

export default PlaceholderImage;
