// components
import Modal from 'react-modal';
import Icon from './Icon';

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
        <img className={styles.image} src={images[currentImage]} alt="" />
        <button onClick={() => setOpen(false)}>Close Modal</button>
        <button className={styles.chevronButton} onClick={prevImage}>
          <Icon name="Left Arrow" size="2rem" stroke="gray"></Icon>
        </button>
        <button className={styles.chevronButton} onClick={nextImage}>
          <Icon name="Right Arrow" size="2rem" stroke="gray"></Icon>
        </button>
      </Modal>
    </div>
  );
}

export default ImageModal;
