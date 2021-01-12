import React from "react";
import style from "./body.module.css"
import Home from "./home/home"
import Projects from "./project/projects"


const Body = () => {
    return(
        <main className={style.body}>
            <Home />
            <Projects />
        </main>
    )
}

export default Body;