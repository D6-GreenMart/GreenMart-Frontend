import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home';  // Import Home component
import Register from './components/LoginPages/Register';
import Login from './components/LoginPages/Login';
import ForgotPassword from './components/LoginPages/ForgotPassword';
import BrowseProducts from './components/UserActions/BrowseProducts';
import ProductDetails from './components/UserActions/ProductDetails';
import ShoppingCart from './components/UserActions/ShoppingCart';
import AdminLogin from './components/LoginPages/AdminLogin';
import VendorLogin from './components/LoginPages/VendorLogin';
import FruitsCategory from './components/category/FruitsCategory1';
import VegetablesCategory from './components/category/VegetablesCategory2';
import DailyEssentialsCategory from './components/category/DailyEssentialsCategory3';
import UserProfile from './components/Pages/UserProfile';
import VendorDetails from './components/Pages/VendorDetails';
import UserLogin from './components/LoginPages/UserLogin';
import AboutUs from './components/Pages/AboutUs';

import './App.css';
import './css/BrowseProducts.css';
import './css/ProductDetails.css';
import './css/VendorDetails.css';

function App() {
  const [cart, setCart] = useState([]); // State to store cart items

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <header className="navbar">
        <ul>  
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browseProducts">Browse Products</Link></li>
          <li><Link to="/shoppingCart">Shopping Cart</Link></li>
          <li><Link to="/vendorDetails">Vendor Details</Link></li>
          <li><Link to="/aboutUs">About Us</Link></li>
        </ul>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/browseProducts"
            element={<BrowseProducts addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/shoppingCart"
            element={<ShoppingCart cart={cart} />}
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route
            path="/fruits"
            element={<FruitsCategory addToCart={addToCart} />}
          />
          <Route
            path="/vegetables"
            element={<VegetablesCategory addToCart={addToCart} />}
          />
          <Route
            path="/daily-essentials"
            element={<DailyEssentialsCategory addToCart={addToCart} />}
          />
           <Route path="/" element={<ShoppingCart />} />
          <Route path="/aboutUs" element={<AboutUs />} /> 
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/vendorDetails" element={<VendorDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;