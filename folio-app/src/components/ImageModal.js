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
    setCurrentImage(currentImage + 1);
  }

  function prevImage() {
    setCurrentImage(currentImage - 1);
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
        <div onClick={prevImage}>
          <Icon name="Left Arrow" size="2rem" stroke="gray"></Icon>
        </div>
        <div onClick={nextImage}>
          <Icon name="Right Arrow" size="2rem" stroke="gray"></Icon>
        </div>
      </Modal>
    </div>
  );
}

export default ImageModal;
