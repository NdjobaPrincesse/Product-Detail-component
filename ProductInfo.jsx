import React from 'react';
import styles from './ProductInfo.module.css';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';

const ProductInfo = ({
  name,
  price,
  discountPrice,
  description,
  colors,
  sizes,
  selectedColor,
  onColorSelect,
  onSizeSelect
}) => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.productName}>{name}</h2>
      <div className={styles.priceContainer}>
        {discountPrice && <span className={styles.oldPrice}>${price}</span>}
        <span className={styles.newPrice}>${discountPrice || price}</span>
      </div>
      <p className={styles.productDescription}>{description}</p>
      <ColorSelector
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={onColorSelect}
      />
      <SizeSelector
        sizes={sizes}
        onSizeSelect={onSizeSelect}
      />
    </div>
  );
};

export default ProductInfo;
