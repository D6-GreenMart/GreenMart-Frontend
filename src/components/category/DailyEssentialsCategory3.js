import React from "react";
import { Link } from "react-router-dom";
import "../../css/DailyEssentialsCategory3.css"; // Ensure CSS file exists

const essentials = [
  { id: 21, name: "Milk", price: 3 },
  { id: 22, name: "Eggs", price: 5 },
  { id: 23, name: "Bread", price: 2 },
  { id: 24, name: "Rice", price: 10 },
  { id: 25, name: "Flour", price: 7 },
  { id: 26, name: "Sugar", price: 4 },
  { id: 27, name: "Salt", price: 1 },
  { id: 28, name: "Cooking Oil", price: 12 },
  { id: 29, name: "Tea", price: 8 },
  { id: 30, name: "Coffee", price: 9 },
];

const Category3 = ({ addToCart }) => {
  return (
    <div>
      <h2>Daily Essentials</h2>
      <div className="product-list">
        {essentials.map((essential) => (
          <div key={essential.id} className="product">
            <h3>{essential.name}</h3>
            <p>Price: ${essential.price}</p>
            <button onClick={() => addToCart(essential)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/">Back to Home</Link> |
       <Link to="/browseProducts"> Back to Browse Products</Link>
    </div>
  );
};

export default Category3;
