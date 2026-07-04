import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user, token]);

  // Demo Login
  const login = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);
  };

  // Dummy Login API
  const loginSessionEngine = async (email, pin) => {
    const demoUser = {
      id: 1,
      name: "Demo Seller",
      email,
      role: "SELLER",
      shopName: "Demo Restaurant",
    };

    const demoToken = "demo-jwt-token";

    login(demoUser, demoToken);

    return {
      token: demoToken,
      user: demoUser,
    };
  };

  // Dummy Register
  const registerSellerSessionEngine = async (payload) => {
    const demoUser = {
      id: 2,
      name: payload.name || "Demo Seller",
      email: payload.email,
      role: "SELLER",
      shopName: payload.shopName || "Demo Shop",
    };

    const demoToken = "demo-register-token";

    login(demoUser, demoToken);

    return {
      success: true,
      token: demoToken,
      user: demoUser,
    };
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        loginSessionEngine,
        registerSellerSessionEngine,
        logout,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);