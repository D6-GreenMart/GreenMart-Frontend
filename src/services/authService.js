// src/services/authService.js
import api from './api';

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data; // { token, expiresIn, ... }
};

export const register = async (userData) => {
  // userData should include fields like { email, password, ... }
  const response = await api.post('/users/register', userData);
  return response.data;
};
