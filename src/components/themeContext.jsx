import React from "react";

export const themes = {
  dark: true,
  light: false,
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
