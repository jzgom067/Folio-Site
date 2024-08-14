import { useState } from "react";
import styles from "./PlaceholderImage.module.css";

function PlaceholderImage({ className, src, alt }) {
  const [isLoaded, onLoad] = useState(false);

  const img = new Image();
  img.src = src;

  return (
    <div>
      {!isLoaded &&
        <div className={className}>
          <div
            style={{
              width: img.width,
              aspectRatio: (img.width / img.height)
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
        onLoad={() => onLoad(true)}
      />
    </div>
  );
}

export default PlaceholderImage;
