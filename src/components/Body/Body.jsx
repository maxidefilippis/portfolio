import React, { useContext } from "react";
import style from "./body.module.scss";
import Home from "./Home/Home.jsx";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact"
import ThemeContext from "../ThemeContext";

const Body = () => {
  const darkMode = useContext(ThemeContext);

  return (
    <main>
      <div className={ darkMode ? [style.body, style.darkBody].join(" ") : style.body }>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default Body;
