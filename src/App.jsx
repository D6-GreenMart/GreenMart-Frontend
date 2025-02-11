// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Header from './components/Header';
import CategoryProducts from './pages/CategoryProducts';
import VendorDashboard from './pages/VendorDashboard';
import VendorAddProduct from './pages/VendorAddProduct';
import VendorProductDetails from './pages/VendorProductDetails'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin-dashboard" element={<div>Admin Dashboard</div>} />
        <Route path="/vendor-dashboard" element={<VendorDashboard/>} />  
        <Route path="/vendor/product/:productId" element={<VendorProductDetails />} />
        <Route path="/products/category/:categoryId" element={<CategoryProducts />} />
        <Route path="/vendor/add-product" element={<VendorAddProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </Router>
  );
};

export default App;
