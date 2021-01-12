import React from "react";
import Project from "./project";

const projects = [
    {
        img: "../../../img/project.png",
        title: "Titulo del proyecto",
        description: "Esta es la descripción de un proyecto y acá cuento como fue realizado"
    },
    {
        img: "../../../img/project.png",
        title: "Titulo del proyecto",
        description: "Esta es la descripción de un proyecto y acá cuento como fue realizado"
    },
]

const Projects = () => {
    return(
        <div>
            {projects.map( project => <Project project={project} />)}
        </div>
    )
}

export default Projects;