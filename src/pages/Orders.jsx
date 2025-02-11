// src/pages/Orders.jsx
import { useEffect, useState } from 'react';
import api from '../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    api.get('/orders/user')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);
  
  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length ? (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              Order ID: {order.id} — Status: {order.status}
              {/* Optionally, add a link to view more details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default Orders;
