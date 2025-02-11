// src/pages/AdminDashboard.jsx
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const [pendingProducts, setPendingProducts] = useState([]);
  const [loadingPending, setLoadingPending] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch pending products
  const fetchPendingProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/products/pending', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`Error fetching pending products: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched pending products:', data);
      setPendingProducts(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoadingPending(false);
    }
  };

  // Fetch pending products on component mount
  useEffect(() => {
    fetchPendingProducts();
  }, []);

  // Handler to update product status (approve or reject)
  const handleUpdateStatus = async (productId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('User not authenticated');
      }
      const response = await fetch(
        `http://localhost:8080/api/v1/products/${productId}/status?status=${newStatus}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to update status: ${response.status}`);
      }
      const updatedProduct = await response.json();
      console.log('Updated product:', updatedProduct);
      toast.success(`Product ${newStatus.toLowerCase()} successfully!`);
      // Refresh pending products list after updating status
      fetchPendingProducts();
    } catch (error) {
      console.error("Error updating product status:", error);
      toast.error(`Error updating product status: ${error.message}`);
    }
  };

  if (loadingPending) {
    return (
      <div className="container mt-5">
        <p>Loading pending products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Pending Products</h2>
      {pendingProducts.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-light">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    {product.imagePath ? (
                      <img
                        src={product.imagePath}
                        alt={product.name}
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleUpdateStatus(product.id, 'APPROVED')}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleUpdateStatus(product.id, 'REJECTED')}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No pending products found.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
