import React, { useContext } from "react";
import style from "./body.module.scss";
import Home from "./home/home";
import Projects from "./projects/projects";
import themeContext from "../themeContext";

const Body = () => {
  const darkMode = useContext(themeContext);
  return (
    <main>
      <div
        className={
          darkMode ? [style.body, style.darkBody].join(" ") : style.body
        }
      >
        <Home />
        <Projects />
      </div>
    </main>
  );
};

export default Body;
