import React from "react";
import style from "./projects.module.scss";
import themeContext from "../../themeContext";
import Project from "./project";

const projects = [
  {
    img: "../../../img/perfil.jpg",
    title: "Titulo del proyecto 1",
    description:
      "Esta es la descripción de un proyecto y acá cuento como fue realizado",
    animation: "fade-left",
  },
  {
    img: "../../../img/perfil.jpg",
    title: "Titulo del proyecto 2",
    description:
      "Esta es la descripción de un proyecto y acá cuento como fue realizado",
    animation: "fade-right",
  },
];

const Projects = () => {
  const darkMode = React.useContext(themeContext);

  return (
    <div
      className={
        darkMode ? [style.projects, style.dark].join(" ") : style.projects
      }
    >
      <h1>Projects</h1>
      {projects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </div>
  );
};

export default Projects;
