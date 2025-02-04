import React from "react";
import { Link } from "react-router-dom";
import "../../css/VendorDetails.css";

const vendors = [
  {
    id: 1,
    name: "Fresh Farm",
    image: "/images/vendor1.jpg",
    review: "Excellent quality and service!",
  },
  {
    id: 2,
    name: "Green Grocers",
    image: "/images/vendor2.jpg",
    review: "Great selection of fresh produce!",
  },
  {
    id: 3,
    name: "Daily Mart",
    image: "/images/vendor3.jpg",
    review: "Affordable prices and quick delivery!",
  },
];

const VendorDetails = () => {
  return (
    <div className="vendor-details-container">
      {/* Top Components (Navbar, etc.) */}
      <header>
        <h1>Our Trusted Vendors</h1>
      </header>
      
      <div className="vendors-list" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {vendors.map((vendor) => (
          <div key={vendor.id} className="vendor-card" style={{ flex: "1", maxWidth: "30%", textAlign: "center" }}>
            <img src={vendor.image} alt={vendor.name} className="vendor-image" style={{ width: "100%", borderRadius: "10px" }} />
            <h2>{vendor.name}</h2>
            <Link to={`/browse-products?vendor=${vendor.id}`} className="browse-button">
              Browse Products
            </Link>
            <p className="vendor-review">"{vendor.review}"</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>Email: support@freshmart.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browseProducts">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates on our fresh arrivals.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default VendorDetails;