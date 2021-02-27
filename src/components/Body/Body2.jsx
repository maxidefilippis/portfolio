import React, { useContext } from "react";
import style from "./body.module.scss";
import Home from "./Home2/Home.jsx.js";
import Projects from "./Projects2/Projects2";
import Skills from "./Skills2/Skills2"
import Contact from "./Contact2/Contact2"
import ThemeContext from "../ThemeContext2";

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
