import React from "react";
import { Link } from "react-router-dom";

import "../../css/Navbar.css";


const Navbar = () => {
  return (
    <div>
      {/* First Navbar (Main Navigation) */}
      <nav className="main-navbar">
        <div className="logo">🌿 Green Mart</div>
        <input type="text" placeholder="Search for products..." className="search-bar" />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/account">Account</Link>
          <Link to="/cart">🛒 Cart</Link>
          <Link to="/user">👤 User</Link>
        </div>
      </nav>

      {/* Second Navbar (Categories Section) */}
      <nav className="categories-navbar">
        <Link to="/fruits">🍎 Fruits</Link>
        <Link to="/vegetables">🥦 Vegetables</Link>
        <Link to="/dairy">🥛 Dairy</Link>
        <Link to="/beverages">🥤 Beverages</Link>
      </nav>

      {/* Organic Section */}
      <div className="organic-section">
        <div className="organic-box">
          <h3>Organic Fruits</h3>
          <p>Fresh and organic fruits for a healthy life.</p>
          <Link to="/fruits" className="organic-link">Explore Fruits →</Link>
        </div>
        <div className="organic-box">
          <h3>Organic Vegetables</h3>
          <p>Pure organic vegetables directly from farms.</p>
          <Link to="/vegetables" className="organic-link">Explore Vegetables →</Link>
        </div>
      </div>

      {/* Shop Now Button */}
      <div className="shop-now-container">
        <button className="shop-now-btn">🛍️ Shop Now</button>
      </div>

      {/* Categories Boxes Below */}
      <div className="categories-container">
        <h2>Shop by Category</h2>
        <div className="categories-boxes">
          <div className="category-box">🍎 Fruits</div>
          <div className="category-box">🥦 Vegetables</div>
          <div className="category-box">🥛 Dairy</div>
          <div className="category-box">🍞 Bakery</div>
          <div className="category-box">🥤 Beverages</div>
          <div className="category-box">🍪 Snacks</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
