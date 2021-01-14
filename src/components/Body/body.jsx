import React from "react";
import style from "./body.module.scss"
import Home from "./home/home"
import Projects from "./projects/projects"


const Body = () => {
    return(
        <main className={style.body}>
            <Home />
            <Projects />
        </main>
    )
}

export default Body;