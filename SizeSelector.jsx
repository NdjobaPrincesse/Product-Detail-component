import React, { useState } from 'react';
import styles from './SizeSelector.module.css';

const SizeSelector = ({ sizes, onSizeSelect }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelect = (size) => {
    setSelectedSize(size);
    if (onSizeSelect) onSizeSelect(size);
  };

  return (
    <div className={styles.sizeSelectorContainer}>
      <h4>Select Size:</h4>
      <div className={styles.sizeOptions}>
        {sizes.map((size) => (
          <button
            key={size}
            className={`${styles.sizeButton} ${selectedSize === size ? styles.activeSize : ''}`}
            onClick={() => handleSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
