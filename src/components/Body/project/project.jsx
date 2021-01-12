import React, { useEffect } from "react";
import style from "./project.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ project }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-left" className={style.card}>
      <img className={style.img} src={require(project.img)} alt="project img" />
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.description}>{project.description}</p>
    </div>
  );
};

export default Project;
