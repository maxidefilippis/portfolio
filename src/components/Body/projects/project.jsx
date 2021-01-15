import React, { useEffect } from "react";
import style from "./projects.module.scss";
import themeContext from "../../themeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ project }) => {
  const darkMode = React.useContext(themeContext);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className={darkMode ? [style.card, style.dark].join(" ") : style.card}
      data-aos={project.animation}
    >
      <img className={style.img} src={project.img} alt="project img" />
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.description}>{project.description}</p>
    </div>
  );
};

export default Project;
