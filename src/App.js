import React, { useState } from "react";
import Footer from "./components/Footer/footer";
import Body from "./components/Body/body";
import Header from "./components/Header/header";
import ThemeContext, { darkMode } from "./components/themeContext";

function App() {
  const [theme, setTheme] = useState(darkMode);

  const toggleTheme = () => {
    theme
      ? localStorage.setItem("dark-mode", "false")
      : localStorage.setItem("dark-mode", "true");
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={ theme ? { backgroundColor: "#f0f0f0" } : { backgroundColor: "#242526" }}>
        <Header toggleTheme={toggleTheme} />
        <Body />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
