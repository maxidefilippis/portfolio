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
      <h3 className={style.title}>{project.title}</h3>
      <img className={style.img} src={project.img} alt="project img" />
      <p className={style.description}>{project.description}</p>
      <div className={style.linkContainer}>
        {project.deploy &&
        <a  className={ darkMode ? [style.dark, style.link].join(" ") : style.link} 
            href={project.deploy}
            target="_blank">
          Link al proyecto
        </a>
        }
        {project.repositorio &&
        <a  className={ darkMode ? [style.link, style.dark].join(" ") : style.link} 
            href={project.repositorio}
            target="_blank">
          Link al repositorio
        </a>
        }
      </div>
      <h4>Tecnologías aplicadas:</h4>
      <div className={style.techContainer}>
        {project.technologies.map((tech) => (
          <p className={style.technologies}>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default Project;
