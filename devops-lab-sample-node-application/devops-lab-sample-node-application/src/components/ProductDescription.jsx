import React, { useState } from 'react';

const ProductDescription = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);

  const colors = {
    black: {
      name: 'Black',
      image: 'https://i.ibb.co/vxpmbb9Z/black.jpg'
    },
    white: {
      name: 'White',
      image: 'https://i.ibb.co/Lh9JDm4t/white.jpg'
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-container">
      <div className="product-image-section">
        <img
          src={colors[selectedColor].image}
          alt={`${colors[selectedColor].name} Headphones`}
          className="product-image"
        />
      </div>
      
      <div className="product-details-section">
        <h1 className="product-title">Premium Wireless Headphones</h1>
        
        <div className="product-rating">
          <span>★★★★★</span>
          <span>(4.8/5)</span>
        </div>

        <p className="product-price">$299.99</p>

        <div className="color-options">
          <h3 className="color-options-title">Available Colors</h3>
          <div className="color-selector">
            {Object.entries(colors).map(([colorKey, colorData]) => (
              <button
                key={colorKey}
                className={`color-option ${selectedColor === colorKey ? 'selected' : ''}`}
                style={{ backgroundColor: colorKey }}
                onClick={() => handleColorChange(colorKey)}
                aria-label={`Select ${colorData.name} color`}
              />
            ))}
          </div>
        </div>

        <div className="quantity-selector">
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-secondary">Add to Wishlist</button>
        </div>

        <div className="product-description">
          <p>
            Experience premium sound quality with our wireless headphones.
            Featuring advanced noise cancellation, comfortable ear cushions,
            and long battery life for an immersive listening experience.
          </p>
        </div>

        <div className="product-features">
          <ul>
            <li>Active Noise Cancellation</li>
            <li>40-hour Battery Life</li>
            <li>Bluetooth 5.0</li>
            <li>Quick Charge Technology</li>
            <li>Premium Sound Quality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;