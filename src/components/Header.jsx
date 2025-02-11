// src/components/Header.jsx
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  // Debug: log authData when it changes
  useEffect(() => {
    console.log("Auth data in Header:", authData);
  }, [authData]);

  // Determine left navigation links based on user role
  let leftLinks = [];
  if (!authData) {
    // Not logged in
    leftLinks = [
      { label: "Home", url: "/" },
      { label: "Products", url: "/products" },
    ];
  } else if (authData.role === "ADMIN") {
    leftLinks = [
      { label: "Home", url: "/admin-dashboard" },
      { label: "Products", url: "/products" },
      { label: "Add Category", url: "/admin/add-category" },
      { label: "Pending Orders", url: "/admin/pending-orders" },
    ];
  } else if (authData.role === "CUSTOMER") {
    leftLinks = [
      { label: "Home", url: "/" },
      { label: "Products", url: "/products" },
      { label: "Cart", url: "/cart" },
      { label: "Orders", url: "/orders" },
    ];
  } else if (authData.role === "VENDOR") {
    leftLinks = [
      { label: "Home", url: "/vendor-dashboard" },
      { label: "Products", url: "/products" },
      { label: "Add Product", url: "/vendor/add-product" },
    ];
  }

  // Logout handler: clear auth data and localStorage, then navigate to home
  const handleLogout = () => {
    setAuthData(null);
    localStorage.removeItem('token');
    localStorage.removeItem('authData');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderBottom: '1px solid #ccc', padding: '1rem' }}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/" style={{ fontSize: '2rem', color: '#2e7d32' }}>
          GreenMart
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left nav links */}
          <ul className="navbar-nav me-auto">
            {leftLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <Link
                  className="nav-link"
                  to={link.url}
                  style={{ color: '#2e7d32', fontWeight: 'bold' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Right side: either user info with Logout button or Login/Register links */}
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
                <button
                  className="btn btn-outline-danger btn-sm ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" style={{ color: '#2e7d32', fontWeight: 'bold' }}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register" style={{ color: '#2e7d32', fontWeight: 'bold' }}>
                    Register
                  </Link>
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
