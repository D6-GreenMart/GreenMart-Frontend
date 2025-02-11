// src/components/Header.jsx
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { authData } = useContext(AuthContext);

  // Debug: log authData when it changes
  useEffect(() => {
    console.log("Auth data in Header:", authData);
  }, [authData]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderBottom: '1px solid #ccc', padding: '1rem' }}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/" style={{ fontSize: '2rem', color: '#2e7d32' }}>
          GreenMart
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left nav links */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: '#2e7d32', fontWeight: 'bold' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" style={{ color: '#2e7d32', fontWeight: 'bold' }}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" style={{ color: '#2e7d32', fontWeight: 'bold' }}>Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders" style={{ color: '#2e7d32', fontWeight: 'bold' }}>Orders</Link>
            </li>
          </ul>
          {/* Right side: either user info or Login/Register links */}
          <ul className="navbar-nav ms-auto">
            {authData && authData.name ? (
              <li className="nav-item d-flex align-items-center">
                {authData.imagePath ? (
                  <img 
                    src={authData.imagePath} 
                    alt="User Profile" 
                    className="rounded-circle me-2" 
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
                  />
                ) : (
                  <div 
                    className="rounded-circle bg-secondary me-2" 
                    style={{ width: '40px', height: '40px' }}
                  ></div>
                )}
                <span className="nav-link" style={{ fontWeight: 'bold', color: '#2e7d32' }}>
                  {authData.name}
                </span>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" style={{ color: '#2e7d32', fontWeight: 'bold' }}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register" style={{ color: '#2e7d32', fontWeight: 'bold' }}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
