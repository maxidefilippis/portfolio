import React, { useContext, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import style from "./header.module.scss";
import themeContext from "../themeContext";

const Header = ({ toggleTheme, theme }) => {
  const darkMode = useContext(themeContext);
  const [navbar, setNavbar] = useState(false);

  const detectTop = () => {
    if (window.scrollY > 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", detectTop);

  const styleController = () => {
    if (darkMode && navbar)
      return [style.header, style.dark, style.scroll].join(" ");
    if (darkMode && !navbar) return [style.header, style.dark].join(" ");
    if (!darkMode && navbar) return [style.header, style.scroll].join(" ");
    if (!darkMode && !navbar) return style.header;
  };

  return (
    <header className={styleController()}>
      <div>
        <Link
          to="home"
          activeClass={style.active}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={style.home}
        >
          <span className={style.socialIcon}>
            <i className="fas fa-home" style={{ marginRight: "10px" }}></i>
          </span>
          Home
        </Link>
        <Link
          to="projects"
          activeClass={style.active}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={style.link}
        >
          <i className="fas fa-tasks" style={{ marginRight: "10px" }}></i>
          Projects
        </Link>
        <Link
          to="skills"
          activeClass={style.active}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={style.link}
        >
          <i className="fas fa-bolt" style={{ marginRight: "10px" }}></i>
          Skills
        </Link>
        <Link
          to="contact"
          activeClass={style.active}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={style.link}
        >
          <i
            className="fas fa-envelope-open-text"
            style={{ marginRight: "10px" }}
          ></i>
          Contact
        </Link>
      </div>
      <div className={style.switchSection}>
        <span className={style.textMode}>
          {darkMode ? "Light Theme" : "Dark Theme"}
        </span>
        <button
          className={
            darkMode ? style.switch : [style.switch, style.active].join(" ")
          }
          onClick={toggleTheme}
        >
          <span className={style.icon}>
            <i className="fas fa-sun"></i>
          </span>
          <span className={style.icon}>
            <i className="fas fa-moon"></i>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
