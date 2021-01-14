import React, { useEffect } from "react";
import style from "./project.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ project }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos={project.animation} className={style.card}>
      <img className={style.img} src={project.img} alt="project img" />
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.description}>{project.description}</p>
    </div>
  );
};

export default Project;
