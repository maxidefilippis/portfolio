import React from "react"
import Footer from "./components/Footer/footer";
import Body from "./components/Body/body";
import Header from "./components/Header/header";
import ThemeContext, { themes } from "./components/themeContext";

function App() {
  const [theme, setTheme] = React.useState(themes.light);

  const toggleTheme = () => {
    setTheme(!theme)
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Header toggleTheme={toggleTheme} />
      <Body />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
