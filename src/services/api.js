// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // adjust to your backend URL if needed
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Token stored after login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
