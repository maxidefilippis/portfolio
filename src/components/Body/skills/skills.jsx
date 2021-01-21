import React from "react";
import style from "./skills.module.scss";
import themeContext from "../../ThemeContext";
import { Icon, InlineIcon } from "@iconify/react";

const Skills = () => {
  const darkMode = React.useContext(themeContext);

  return (
    <div
      id="skills"
      className={darkMode ? [style.skills, style.dark].join(" ") : style.skills}
    >
      <h1 className={style.title}>Skills</h1>
      <h2 className={style.subtitle}>FRONT</h2>
      <div data-aos="fade-up" className={style.skillsContainer}>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fab fa-html5"></i>
          <span className={style.tech}>HTML5</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fab fa-css3-alt"></i>
          <span className={style.tech}>CSS3</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fab fa-js-square"></i>
          <span className={style.tech}>JAVASCRIPT</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fab fa-react"></i>
          <span className={style.tech}>REACT</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fab fa-react"></i>
          <span className={style.tech}>REACT-NATIVE</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <span
            class="iconify"
            data-icon="bx:bxl-redux"
            data-inline="false"
          ></span>
          <span className={style.tech}>REDUX</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fab fa-bootstrap"></i>
          <span className={style.tech}>BOOTSTRAP</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fab fa-sass"></i>
          <span className={style.tech}>SASS</span>
        </span>
      </div>
      <h2 className={style.subtitle}>BACK</h2>
      <div data-aos="fade-up" className={style.skillsContainer}>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fade-up"></i>
          <span className={style.tech}>NODE.JS</span>
        </span>

        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <span
            class="iconify"
            data-icon="simple-icons:express"
            data-inline="false"
          ></span>
          <span className={style.tech}>EXPRESS</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <span
            class="iconify"
            data-icon="file-icons:sequelize"
            data-inline="false"
          ></span>
          <span className={style.tech}>SEQUELIZE</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <span
            class="iconify"
            data-icon="cib:postgresql"
            data-inline="false"
          ></span>
          <span className={style.tech}>POSTGRESQL</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <span
            class="iconify"
            data-icon="bx:bxl-firebase"
            data-inline="false"
          ></span>
          <span className={style.tech}>FIREBASE</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <span
            class="iconify"
            data-icon="cib:mongodb"
            data-inline="false"
          ></span>
          <span className={style.tech}>MONGODB</span>
        </span>
        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <span
            class="iconify"
            data-icon="cib:graphql"
            data-inline="false"
          ></span>
          <span className={style.tech}>GRAPHQL</span>
        </span>

        <span
          className={
            darkMode ? [style.icons, style.dark].join(" ") : style.icons
          }
        >
          <i class="fab fa-git"></i>
          <span className={style.tech}>GIT</span>
        </span>
      </div>
    </div>
  );
};

export default Skills;
