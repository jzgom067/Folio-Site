// components
import Modal from 'react-modal';

// react stuff
import React, { useState } from 'react';

// styling
import styles from './ImageModal.module.css';

function ImageModal({ images }) {
  const [modalOpen, setOpen] = useState(false);

  return (
    <div
      className={styles.modalTrigger}
      onMouseDown={() =>
        setOpen(true)
      }
    >
      <Modal
        isOpen={modalOpen}
        className={styles.modalBody}
        overlayClassName={styles.modalOverlay}
      >
        <img className={styles.image} src={images[0]} alt="" />
        <button onClick={() => setOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default ImageModal;
