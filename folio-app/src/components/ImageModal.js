// components
import Modal from 'react-modal';
import Icon from './Icon';
import PlaceholderImage from './PlaceholderImage';

// react stuff
import React, { useState } from 'react';

// styling
import styles from './ImageModal.module.css';

function ImageModal({ images }) {
  const [modalOpen, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    setCurrentImage((current) => (current + 1) % images.length);
  }

  function prevImage() {
    setCurrentImage((current) => (current - 1 + images.length) % images.length);
  }

  document.onkeydown = keyDown;

  function keyDown(e) {
    if (!modalOpen) return;
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  }

  return (
    <div
      className={styles.modalTrigger}
      onMouseDown={() => {
        if (!modalOpen) {
          setOpen(true);
          setCurrentImage(0);
        }
      }}
    >
      <Modal
        isOpen={modalOpen}
        className={styles.modalBody}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.header}>
          {images[currentImage].title}
          <button className={styles.xButton} onClick={() => setOpen(false)}>
            <Icon name="X" size="2rem" stroke="gray"></Icon>
          </button>
        </div>
        <div className={styles.imageRow}>
          <button className={styles.chevronButton} onClick={prevImage}>
            <Icon name="Left Arrow" size="2rem" stroke="gray"></Icon>
          </button>
          <PlaceholderImage
            className={styles.image}
            src={images[currentImage].img}
            alt=""
            width="1920px"
            aspectRatio="16 / 9"
          />
          <button className={styles.chevronButton} onClick={nextImage}>
            <Icon name="Right Arrow" size="2rem" stroke="gray"></Icon>
          </button>
        </div>
        <div className={styles.imageNumber}>
          ({currentImage + 1}/{images.length})
        </div>
      </Modal>
    </div>
  );
}

export default ImageModal;
