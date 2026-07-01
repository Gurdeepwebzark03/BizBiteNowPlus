import React, { createContext, useContext, useState, useEffect } from 'react';
import API from '../api/axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      // Inject token into every axios request automatically
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      localStorage.removeItem('token');
      delete API.defaults.headers.common['Authorization'];
    }
    setAuthLoading(false);
  }, [token]);

  const loginSessionEngine = async (phone, password) => {
    // API match with backend auth controller keys
    const res = await API.post('/auth/login', { phone, password });
    if (res.data?.token) {
      setToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    }
    throw new Error("Invalid credentials payload match failure.");
  };

  const registerSellerSessionEngine = async (payload) => {
    const res = await API.post('/auth/register/seller', payload);
    if (res.data?.token) {
      setToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    }
    return res.data;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, loginSessionEngine, registerSellerSessionEngine, logout, authLoading }}>
      {!authLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);