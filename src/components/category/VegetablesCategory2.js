import React from "react";
import { Link } from "react-router-dom";
import "../../css/VegetablesCategory2.css"; // Ensure CSS file exists

const vegetables = [
  { id: 11, name: "Carrot", price: 2 },
  { id: 12, name: "Broccoli", price: 3 },
  { id: 13, name: "Spinach", price: 2 },
  { id: 14, name: "Potato", price: 1 },
  { id: 15, name: "Tomato", price: 2 },
  { id: 16, name: "Onion", price: 2 },
  { id: 17, name: "Cabbage", price: 3 },
  { id: 18, name: "Cauliflower", price: 4 },
  { id: 19, name: "Bell Pepper", price: 5 },
  { id: 20, name: "Peas", price: 3 },
];

const Category2 = ({ addToCart }) => {
  return (
    <div>
      <h2>Vegetables</h2>
      <div className="product-list">
        {vegetables.map((vegetable) => (
          <div key={vegetable.id} className="product">
            <h3>{vegetable.name}</h3>
            <p>Price: ${vegetable.price}</p>
            <button onClick={() => addToCart(vegetable)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/">Back to Home</Link> |
       <Link to="/browseProducts"> Back to Browse Products</Link>
    </div>
  );
};

export default Category2;
