import { useState } from "react";
import styles from "./PlaceholderImage.module.css";

function PlaceholderImage({ className, src, alt, width, height, aspectRatio }) {
  const [isLoaded, onLoad] = useState(false);

  // function timeout(delay) {
  //   return new Promise( res => setTimeout(res, delay) );
  // }

  // async function loadImg() {
  //   await timeout(5000);
  //   onLoad(true);
  // }

  // loadImg();

  return (
    <div>
      {!isLoaded && 
        <div className={className}>
          <div
            style={{
              width: width,
              height: height,
              aspectRatio: aspectRatio,
            }}
            className={styles.placeholder}
          >
            Loading...
          </div>
        </div>
      }
      <img
        style={ isLoaded ? {} : {display: 'none'} }
        className={className}
        src={src}
        alt={alt}
        onLoad={() => onLoad(true)}
      />
    </div>
  );
}

export default PlaceholderImage;
