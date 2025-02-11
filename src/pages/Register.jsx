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
      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      console.error(error);
      toast.error('Registration failed.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input 
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        {/* Email */}
        <input 
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        {/* Password */}
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        {/* Address */}
        <input 
          type="text"
          name="address"
          placeholder="Address"
          value={userData.address}
          onChange={handleChange}
          required
        />
        {/* Phone Number */}
        <input 
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={userData.phoneNumber}
          onChange={handleChange}
          required
        />
        {/* Image Path (optional) */}
        <input 
          type="text"
          name="imagePath"
          placeholder="Image Path (optional)"
          value={userData.imagePath}
          onChange={handleChange}
        />
        {/* Checkbox to register as Vendor */}
        <div>
          <input
            type="checkbox"
            name="vendorRegistration"
            id="vendorRegistration"
            checked={userData.role === 'VENDOR'}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="vendorRegistration">Register as Vendor</label>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default Register;
