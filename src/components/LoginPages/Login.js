import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:4000/login', { email, password });
        alert('Login successful');
        console.log(response.data);
      } catch (err) {
        console.error(err);
        alert('Invalid credentials');
      }
    };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="extra-links">
        {/* Forgot Password Link */}
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        {/* Already have an account link */}
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
