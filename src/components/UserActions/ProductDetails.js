import React from 'react';
import { useParams } from 'react-router-dom';
import '../../css/ProductDetails.css'; // Ensure the CSS file path is correct

const ProductDetails = () => {
  const { id } = useParams(); // Retrieve product id from URL

  // Replace the following with actual product details fetching logic (API, context, etc.)
  const product = {
    id: id,
    name: `Product ${id}`,
    price: `₹${id * 100}`, // Price in INR (rupees)
    rating: "4.5",
    imageUrl: `https://via.placeholder.com/600x600?text=Product+${id}`,
    description: "This is a great product!",
    features: ["100% Organic", "Made in India", "Quality Assured"],
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        {/* Larger Product Image */}
        <div className="product-image-section">
          <img src={product.imageUrl} alt={product.name} className="product-details-image" />
          <div className="features-container">
            {product.features.map((feature, index) => (
              <div key={index} className="feature-box">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-details-info">
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
          <div className="buttons-container">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
