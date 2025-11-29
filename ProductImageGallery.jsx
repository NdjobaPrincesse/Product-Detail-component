import React, { useState, useEffect } from 'react';
import styles from './ProductImageGallery.module.css';

const ProductImageGallery = ({ images, selectedImage, onImageSelect }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300); // fade duration
    return () => clearTimeout(timer);
  }, [selectedImage]);

  return (
    <div className={styles.galleryContainer}>
      <div className={`${styles.mainImageContainer} ${fade ? styles.fade : ''}`}>
        <img src={selectedImage} alt="Shoe" className={styles.mainImage} />
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Shoe ${index + 1}`}
            className={`${styles.thumbnail} ${selectedImage === img ? styles.activeThumbnail : ''}`}
            onClick={() => onImageSelect(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
