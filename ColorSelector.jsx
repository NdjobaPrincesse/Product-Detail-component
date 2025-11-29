import React from 'react';
import styles from './ColorSelector.module.css';

const ColorSelector = ({ selectedColor, onColorSelect }) => {
  // Define only the colors you want
  const colors = [
    { name: 'Red' },
    { name: 'Black' },
    { name: 'White' }
  ];

  return (
    <div className={styles.colorContainer}>
      <h4>Select Color:</h4>
      <div className={styles.colorOptions}>
        {colors.map((color) => (
          <button
            key={color.name}
            className={`${styles.colorButton} ${selectedColor === color.name ? styles.activeColor : ''}`}
            style={{
              backgroundColor: color.name.toLowerCase(),
              border: color.name === 'White' ? '1px solid #ccc' : 'none'
            }}
            onClick={() => onColorSelect(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
