import React, { useState } from 'react';

function ProductDescription() {
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Premium Wireless Noise-Cancelling Headphones",
    price: "$349.99",
    originalPrice: "$399.99",
    rating: 4.8,
    reviews: 223,
    description: "Experience immersive sound with our premium wireless headphones featuring adaptive noise cancellation technology. Designed for superior comfort with luxurious materials and intuitive controls for an exceptional listening experience.",
    colors: [
      { name: 'black', code: '#000000' },
      { name: 'white', code: '#FFFFFF' }
    ],
    features: [
      "Advanced noise cancellation with adaptive technology",
      "Up to 30 hours of battery life with quick charging",
      "Premium materials with memory foam ear cushions",
      "Studio-quality sound with deep, accurate bass",
      "Intuitive touch controls for easy operation",
      "Bluetooth 5.0 with multipoint connectivity"
    ]
  };

  const handleColorSelect = (color) => {
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
          src={selectedColor === 'black' 
            ? 'https://i.ibb.co/vxpmbb9Z/black.jpg'
            : 'https://i.ibb.co/Lh9JDm4t/white.jpg'}
          alt={`${product.name} in ${selectedColor}`}
          className="product-image"
        />
      </div>
      
      <div className="product-details-section">
        <h1 className="product-title">{product.name}</h1>
        
        <div className="product-rating">
          <span>★★★★★</span>
          <span>{product.rating} ({product.reviews} reviews)</span>
        </div>

        <div className="product-price">
          <span>{product.price}</span>
          <span style={{ textDecoration: 'line-through', color: '#666', marginLeft: '10px' }}>
            {product.originalPrice}
          </span>
        </div>

        <div className="product-description">
          <p>{product.description}</p>
        </div>

        <div className="color-options">
          <div className="color-options-title">Color</div>
          <div className="color-selector">
            {product.colors.map((color) => (
              <div
                key={color.name}
                className={`color-option ${selectedColor === color.name ? 'selected' : ''}`}
                style={{ backgroundColor: color.code }}
                onClick={() => handleColorSelect(color.name)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <div className="quantity-selector">
          <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-secondary">Buy Now</button>
        </div>

        <div className="product-features">
          <h2>Key Features:</h2>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="product-reviews">
          <h2>Customer Reviews</h2>
          <div className="reviews-list">
            {[
              {
                id: 1,
                user: "John D.",
                rating: 5,
                date: "March 15, 2024",
                comment: "Excellent sound quality and very comfortable for long listening sessions."
              },
              {
                id: 2,
                user: "Sarah M.",
                rating: 4,
                date: "March 12, 2024",
                comment: "Great noise cancellation, battery life could be better."
              },
              {
                id: 3,
                user: "Mike R.",
                rating: 5,
                date: "March 10, 2024",
                comment: "Worth every penny! The sound clarity is amazing."
              }
            ].map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">{review.user}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;