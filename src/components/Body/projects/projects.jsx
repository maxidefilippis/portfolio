import React from "react";
import Project from "./project";

const projects = [
    {
        img: "./img/project.png",
        title: "Titulo del proyecto 1",
        description: "Esta es la descripción de un proyecto y acá cuento como fue realizado",
        animation: "fade-left"
    },
    {
        img: "./img/project.png",
        title: "Titulo del proyecto 2",
        description: "Esta es la descripción de un proyecto y acá cuento como fue realizado",
        animation: "fade-right"
    }
]

const Projects = () => {
    return(
        <div>
            <h1>Projects</h1>
            {projects.map( (project, i) => <Project project={project} key={i} />)}
        </div>
    )
}

export default Projects;