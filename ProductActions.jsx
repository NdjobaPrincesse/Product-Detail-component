import React from 'react';
import styles from './ProductActions.module.css';

const ProductActions = ({ stock, onAddToCart }) => {
  return (
    <div className={styles.actionsContainer}>
      <p className={styles.stock}>
        {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
      </p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.addToCart}
          disabled={stock === 0}
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
        <button className={styles.buyNow} disabled={stock === 0}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
