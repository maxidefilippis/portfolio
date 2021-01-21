import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import ThemeContext, { darkMode } from "./components/ThemeContext";

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
      <div
        style={
          theme
            ? { backgroundColor: "#f0f0f0" }
            : { backgroundColor: "#242526" }
        }
      >
        <Header toggleTheme={toggleTheme} />
        <Body />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
