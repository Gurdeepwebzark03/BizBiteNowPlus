// ThemeContext.jsx

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState("#16522d");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary",
      primaryColor
    );

    localStorage.setItem("themeColor", primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    const saved = localStorage.getItem("themeColor");

    if (saved) {
      setPrimaryColor(saved);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ primaryColor, setPrimaryColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);