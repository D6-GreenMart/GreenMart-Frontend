import React from "react";
import { Link } from "react-router-dom";
import "../../css/FruitsCategory1.css"; // Ensure CSS file exists

const fruits = [
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 1 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Mango", price: 5 },
  { id: 5, name: "Grapes", price: 4 },
  { id: 6, name: "Pineapple", price: 6 },
  { id: 7, name: "Strawberry", price: 7 },
  { id: 8, name: "Watermelon", price: 8 },
  { id: 9, name: "Papaya", price: 3 },
  { id: 10, name: "Kiwi", price: 5 },
];

const Category1 = ({ addToCart }) => {
  return (
    <div>
      <h2>Fruits</h2>
      <div className="product-list">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="product">
            <h3>{fruit.name}</h3>
            <p>Price: ${fruit.price}</p>
            <button onClick={() => addToCart(fruit)}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      {/* Navigation Links */}
      <div className="navigation-links">
        <Link to="/">Back to Home</Link> |  
        <Link to="/browseProducts"> Back to Browse Products</Link>
      </div>
    </div>
  );
};

export default Category1;
