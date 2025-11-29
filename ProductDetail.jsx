import React, { useState, useEffect } from 'react';
import styles from './ProductDetails.module.css';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';
import ProductActions from './ProductActions';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      const data = {
        name: "Nike Air Max 90",
        price: 120,
        discountPrice: 95,
        description: "Clean lines, versatile and timeless. The people's shoe returns with the Nike Air Max 90.",
        colors: [
          { 
            name: "Red", 
            class: "bg-red-500", 
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9bb847d3-338f-48f3-8924-7064b5442595/air-max-90-mens-shoes-6n3vKB.png" 
          },
          { 
            name: "Black", 
            class: "bg-gray-900", 
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-d0a2131f-83c9-4312-87b1-349514033b71/air-max-90-mens-shoes-6n3vKB.png" 
          },
          { 
            name: "White", 
            class: "bg-gray-100", 
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/w_600/299c3d27-e342-4b96-964d-03c6e7847668/air-max-90-mens-shoes-6n3vKB.png" 
          }
        ],
        sizes: [39, 40, 41, 42, 43, 44],
        stock: 20
      };
      setProduct(data);
      setSelectedColor(data.colors[0].name);
      setSelectedImage(data.colors[0].image);
    };
    fetchProduct();
  }, []);

  const handleColorSelect = (colorObj) => {
    setSelectedColor(colorObj.name);
    setSelectedImage(colorObj.image);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size before adding to cart.');
      return;
    }
    alert(`Added to cart: ${product.name} - Color: ${selectedColor}, Size: ${selectedSize}`);
  };

  if (!product) return <div className={styles.loading}>Loading product...</div>;

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.imageGallery}>
        <ProductImageGallery
          images={product.colors.map(c => c.image)}
          selectedImage={selectedImage}
          onImageSelect={setSelectedImage}
        />
      </div>
      <div className={styles.productInfoSection}>
        <ProductInfo
          name={product.name}
          price={product.price}
          discountPrice={product.discountPrice}
          description={product.description}
          colors={product.colors}
          sizes={product.sizes}
          selectedColor={selectedColor}
          onColorSelect={handleColorSelect}
          onSizeSelect={setSelectedSize}
        />
        <ProductActions stock={product.stock} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductDetail;
