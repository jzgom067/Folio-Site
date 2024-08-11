import { useState } from "react";

function PlaceholderImage({ className, src, alt }) {
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
          <p>Loading...</p>
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
