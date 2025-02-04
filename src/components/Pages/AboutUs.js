import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About GreenMart</h2>
      <p style={styles.text}>
        Welcome to <strong>GreenMart</strong>, your one-stop destination for fresh, organic, and high-quality groceries. 
        At GreenMart, we believe in promoting healthy living by providing 100% natural and pesticide-free products sourced 
        directly from trusted farmers and suppliers.
      </p>
      <h3 style={styles.subHeading}>Our Mission</h3>
      <p style={styles.text}>
        Our mission is to revolutionize the grocery shopping experience by offering **organic and sustainable products** 
        while ensuring affordability and convenience. We are dedicated to reducing our environmental impact and promoting 
        eco-friendly packaging solutions.
      </p>
      <h3 style={styles.subHeading}>Why Choose GreenMart?</h3>
      <ul style={styles.list}>
        <li>🌱 100% Fresh and Organic Products</li>
        <li>🚜 Direct Sourcing from Farmers</li>
        <li>📦 Hassle-Free Home Delivery</li>
        <li>💚 Eco-Friendly and Sustainable Practices</li>
        <li>💰 Affordable Pricing and Discounts</li>
      </ul>
      <h3 style={styles.subHeading}>Contact Us</h3>
      <p style={styles.text}>
        📍 Address: 123 GreenMart Avenue, Eco City, India <br />
        📞 Phone: +91 98765 43210 <br />
        📧 Email: support@greenmart.com
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  heading: {
    textAlign: "center",
    color: "#4CAF50",
  },
  subHeading: {
    color: "#2E7D32",
    marginTop: "20px",
  },
  text: {
    color: "#333",
  },
  list: {
    color: "#333",
    paddingLeft: "20px",
  },
};

export default AboutUs;
