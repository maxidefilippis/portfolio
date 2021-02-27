import React from "react";
import style from "./projects.module.scss";
import themeContext from "../../ThemeContext2";
import Project from "./Project2";
import projects from "./ProjectList2"

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
