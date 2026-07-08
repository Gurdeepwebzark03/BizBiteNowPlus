import axios from 'axios';

// 1. Axios instance banaya jisme backend ka base URL set kiya
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Request Interceptor: Yeh har API call ke sath automatic token bhejega
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Backend JWT verify karne ke liye
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Named Export (Taaki Vite default export ka error na de)
export { API };