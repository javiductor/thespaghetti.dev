import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));

    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--color-bg", "#070707");
      root.style.setProperty("--color-text", "#f0f1f6");
      root.style.setProperty("--color-bg-rgb", "7, 7, 7");
    } else {
      root.style.setProperty("--color-bg", "#f0f1f6");
      root.style.setProperty("--color-text", "#070707");
      root.style.setProperty("--color-bg-rgb", "240, 241, 246");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
