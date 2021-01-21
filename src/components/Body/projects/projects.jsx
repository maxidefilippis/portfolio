import React from "react";
import style from "./projects.module.scss";
import themeContext from "../../ThemeContext";
import Project from "./Project";
import projects from "./ProjectList"

const Projects = () => {
  const darkMode = React.useContext(themeContext);

  return (
    <div
      id="projects"
      className={
        darkMode ? [style.projects, style.dark].join(" ") : style.projects
      }
    >
      <h1>Projects</h1>
      <div className={style.projectsContainer}>
      {projects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
      </div>
    </div>
  );
};

export default Projects;
