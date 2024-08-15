import { useState } from "react";
import styles from "./PlaceholderImage.module.css";

function PlaceholderImage({ className, src, alt, width, height, aspectRatio, bgColor }) {
  const [isLoaded, onLoad] = useState(false);
    
  // async function loadImg() {
  //   await new Promise(res => setTimeout(res, 5000));
  //   onLoad(true);
  // }

  // loadImg();

  return (
    <>
      {!isLoaded &&
        <div className={className}>
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
        style={isLoaded ? {} : { display: 'none' }}
        className={className}
        src={src}
        alt={alt}
        // onLoad={() => onLoad(true)}
      />
    </>
  );
}

export default PlaceholderImage;
