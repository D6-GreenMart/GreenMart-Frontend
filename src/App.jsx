// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import AdminPendingOrders from './pages/AdminPendingOrders';
import Header from './components/Header';
import CategoryProducts from './pages/CategoryProducts';
import VendorDashboard from './pages/VendorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import VendorAddProduct from './pages/VendorAddProduct';
import VendorProductDetails from './pages/VendorProductDetails'
import AdminAddCategory from './pages/AdminAddCategory';
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
        <Route path="/vendor-dashboard" element={<VendorDashboard/>} /> 
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
        <Route path="/vendor/product/:productId" element={<VendorProductDetails />} />
        <Route path="/products/category/:categoryId" element={<CategoryProducts />} />
        <Route path="/admin/add-category" element={<AdminAddCategory />} />
        <Route path="/vendor/add-product" element={<VendorAddProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/admin/pending-orders" element={<AdminPendingOrders />} />
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
