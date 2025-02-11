// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/authService';
import { toast } from 'react-toastify';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    imagePath: '', // Optional field; can be left blank
    role: 'CUSTOMER' // Default role is CUSTOMER
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setUserData({ ...userData, role: 'VENDOR' });
    } else {
      setUserData({ ...userData, role: 'CUSTOMER' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userData);
      toast.success('Registration successful! Please log in.');
      // Delay navigation slightly to let the toast show up
      setTimeout(() => navigate('/login'), 150);
    } catch (error) {
      console.error(error);
      toast.error('Registration failed.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '450px' }}>
      <div className="card border-success shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 text-success">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                value={userData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="tel"
                name="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
                value={userData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="text"
                name="imagePath"
                className="form-control"
                placeholder="Image URL (optional)"
                value={userData.imagePath}
                onChange={handleChange}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="vendorRegistration"
                id="vendorRegistration"
                checked={userData.role === 'VENDOR'}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="vendorRegistration">
                Register as Vendor
              </label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login" className="text-success">Login here</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
