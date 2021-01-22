import React, { useEffect } from "react";
import style from "./projects.module.scss";
import themeContext from "../../ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ project }) => {
  const darkMode = React.useContext(themeContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className={darkMode ? [style.card, style.dark].join(" ") : style.card}
      data-aos={project.animation}
    >
      <>
        <h3 className={style.title}>{project.title}</h3>
        <img
          className={darkMode ? [style.img, style.dark].join(" ") : style.img}
          src={project.img}
          alt="project img"
        />
        <p className={style.description}>{project.description}</p>
      </>
      <>
        <div className={style.linkContainer}>
          {project.deploy ? (
            <a
              className={
                darkMode ? [style.dark, style.link].join(" ") : style.link
              }
              href={project.deploy}
              target="_blank"
              rel="noreferrer"
            >
              Deploy
            </a>
          ) : (
            <div
              className={
                darkMode ? [style.dark, style.noLink].join(" ") : style.noLink
              }
            >
              Deploy
            </div>
          )}
          {project.repositorio ? (
            <a
              className={
                darkMode ? [style.link, style.dark].join(" ") : style.link
              }
              href={project.repositorio}
              rel="noreferrer"
              target="_blank"
            >
              Repository
            </a>
          ) : (
            <div
              className={
                darkMode ? [style.noLink, style.dark].join(" ") : style.noLink
              }
            >
              Repository
            </div>
          )}
        </div>
      </>
      <>
        <div className={style.container}>
          <h4 className={style.techStack}>Tech Stack</h4>
          <div className={style.techContainer}>
            {project.technologies.map((tech, e) => (
              <p key={e} className={style.technologies}>
                {tech}
              </p>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Project;
