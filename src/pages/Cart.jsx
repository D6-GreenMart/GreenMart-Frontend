// src/pages/Cart.jsx
import { useEffect, useState } from 'react';
import api from '../services/api';

const Cart = () => {
  const [cart, setCart] = useState(null);
  
  useEffect(() => {
    api.get('/cart')
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  }, []);
  
  const removeItem = async (cartItemId) => {
    try {
      await api.delete(`/cart/remove/${cartItemId}`);
      const res = await api.get('/cart');
      setCart(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  if (!cart) return <div>Loading cart...</div>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items && cart.items.length > 0 ? (
        <ul>
          {cart.items.map(item => (
            <li key={item.id}>
              {item.productName} — Quantity: {item.quantity}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
