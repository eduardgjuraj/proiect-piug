import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../components/Theme";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProviderWrapper");
  }
  return context;
};

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Track if the theme has been loaded

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === "true");
    }
    setIsLoaded(true); // Mark as loaded once the theme is initialized
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("isDarkMode", String(newTheme));
      return newTheme;
    });
  };

  // Apply a fallback background color during loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.backgroundColor = isDarkMode ? "#121212" : "#ffffff";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [isLoaded, isDarkMode]);

  if (!isLoaded) {
    return (
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: isDarkMode ? "#121212" : "#121212",
          color: isDarkMode ? "#121212" : "#121212",
        }}
      >
        <div className="spinner" />
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};