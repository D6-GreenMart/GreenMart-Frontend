import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/ShoppingCart.css'; // Ensure the correct path to the CSS file

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', quantity: 1, price: 100 }, // Prices in INR
    { id: 2, name: 'Item 2', quantity: 1, price: 150 },
    { id: 3, name: 'Item 3', quantity: 1, price: 200 },
    { id: 4, name: 'Item 4', quantity: 1, price: 150 },
    { id: 5, name: 'Item 5', quantity: 1, price: 200 },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const shipping = subtotal > 0 ? 100 : 0; // Example shipping cost (100 INR)
  const total = subtotal + shipping;

  return (
    <div className="shopping-cart-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">
          <Link to="/">GreenMart</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
        </div>
        <div className="user-options">
          {/* Cart and User Profile links */}
          <Link to="/shoppingCart">Cart</Link> {/* Link to shopping cart */}
          <Link to="/userProfile">User</Link> {/* Link to user profile */}
        </div>
      </div>

      {/* Category Bar */}
      <div className="category-bar">
        <div className="categories">
          <Link to="/fruits">Fruits</Link>  {/* Updated category name */}
          <Link to="/vegetables">Vegetables</Link>  {/* Updated category name */}
          <Link to="/daily-essentials">Daily Essentials</Link>  {/* Updated category name */}
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About us</Link>
          <Link to="/contactUs">Contact us</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="cart-content">
        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty.</h2>
            <p>Add items to your cart to proceed.</p>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Shipping: ₹{shipping.toFixed(2)}</p>
            <p>Total: ₹{total.toFixed(2)}</p>
            <button className="checkout-button">Checkout / Continue</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
