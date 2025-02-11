// src/pages/Products.jsx
import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Example: fetch pending products.
    // You can change this endpoint to list products by category or vendor.
    api.get('/products/pending')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
  
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
