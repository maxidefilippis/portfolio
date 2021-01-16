import React from "react";

const ThemeContext = React.createContext();

const isDarkMode = () => {
  let isDarkMode = localStorage.getItem("dark-mode");
  isDarkMode === "true" ? isDarkMode = true : isDarkMode = false;  
  return isDarkMode;
}

export const darkMode = isDarkMode()

export default ThemeContext;
