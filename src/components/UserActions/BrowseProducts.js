import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/BrowseProducts.css';

const BrowseProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { id: 1, name: "Apple", price: "₹50", rating: "4.5", imageUrl: "https://via.placeholder.com/100" },
    { id: 2, name: "Banana", price: "₹20", rating: "4.2", imageUrl: "https://via.placeholder.com/100" },
    { id: 3, name: "Carrot", price: "₹30", rating: "4.8", imageUrl: "https://via.placeholder.com/100" },
    { id: 4, name: "Tomato", price: "₹40", rating: "4.3", imageUrl: "https://via.placeholder.com/100" },
    { id: 5, name: "Milk", price: "₹25", rating: "4.7", imageUrl: "https://via.placeholder.com/100" },
    { id: 6, name: "Bread", price: "₹15", rating: "4.1", imageUrl: "https://via.placeholder.com/100" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="browse-products-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">
          <Link to="/">GreenMart</Link>
        </div>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
          />
        </form>
        <div className="user-options">
          <Link to="/shoppingCart">Cart</Link>
          <Link to="/userProfile">User</Link>
        </div>
      </div>

      {/* Category Bar */}
      <div className="category-bar">
        <div className="categories">
          <Link to="/fruits">Fruits</Link>
          <Link to="/vegetables">Vegetables</Link>
          <Link to="/daily-essentials">Daily Essentials</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About us</Link>
          <Link to="/contactUs">Contact us</Link>
        </div>
      </div>

      {/* Product Boxes */}
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-box">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>Rating: {product.rating} / 5</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrowseProducts;
