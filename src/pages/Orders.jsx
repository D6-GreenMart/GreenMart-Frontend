// src/pages/Orders.jsx
import { useEffect, useState } from 'react';
import api from '../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders/user')
      .then((res) => {
        console.log('Fetched orders:', res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Your Orders</h2>
      {orders.length ? (
        orders.map((order) => (
          <div key={order.id} className="card mb-3">
            <div className="card-header">
              <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
            </div>
            <div className="card-body">
              <p className="card-text">
                <strong>Shipping Address:</strong> {order.address}
              </p>
              <p className="card-text">
                <strong>Total Amount:</strong> ₹{order.amount}
              </p>
              <p className="card-text">
                <strong>Status:</strong> {order.status}
              </p>
              {order.orderItems && order.orderItems.length > 0 ? (
                <>
                  <p className="card-text"><strong>Products:</strong></p>
                  <ul className="list-group">
                    {order.orderItems.map((item) => (
                      <li key={item.id} className="list-group-item">
                        {item.productName} (x{item.quantity})
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="card-text">No products found.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default Orders;
