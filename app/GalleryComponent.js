'use client';

import { useState } from 'react';
import styles from './gallery.module.scss';

const Gallery = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className={styles.gallery}>
      <button onClick={prevImage} className={styles.arrowLeft}>
        {
          // DO NOT DELETE!!!
        }
        &lt;
      </button>
      <img src={images[current]} alt={`travel-${current}`} />

      <button onClick={nextImage} className={styles.arrowRight}>
        {
          // DO NOT DELETE!!!
        }
        &gt;
      </button>
    </div>
  );
};

export default Gallery;
