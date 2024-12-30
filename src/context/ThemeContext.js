"use client";
import React, { useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));

    return (
      <ThemeContext.Provider
        value={{
          toggleTheme,
          theme,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
}

export function useTheme() {
  return useContext(ThemeContext);
}
