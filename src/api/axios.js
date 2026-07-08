import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  withCredentials: true
});

// Automatic JWT Interceptor for Protected Routes
API.interceptors.request.use((config) => {
  const sessionToken = localStorage.getItem('token'); 
  if (sessionToken) {
    config.headers.Authorization = `Bearer ${sessionToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;