import React, { useContext, useState } from "react";
import style from "./header.module.scss";
import themeContext from "../themeContext";

const Header = ({ toggleTheme, theme }) => {
  const darkMode = useContext(themeContext);
  const [navbar, setNavbar] = useState(false);

  const detectTop = () => {
    if (window.scrollY > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", detectTop);

  const styleController = () => {
    if (darkMode && navbar) {
      return [style.header, style.dark, style.active].join(" ");
    }
    if (darkMode && !navbar) {
      return [style.header, style.dark].join(" ");
    }
    if (!darkMode && navbar) {
      return [style.header, style.active].join(" ");
    }
    if (!darkMode && !navbar) {
      return style.header;
    }
  };

  return (
    <header className={styleController()}>
      <div>
        <span className={style.link}>Home </span>
        <span className={style.link}>Projects </span>
        <span className={style.link}>CV </span>
        <span className={style.link}>Contact </span>
      </div>
      <div className={style.switchSection}>
        <span>{darkMode ? "Light Theme" : "Dark Theme"}</span>
        <button
          className={
            darkMode ? style.switch : [style.switch, style.active].join(" ")
          }
          onClick={toggleTheme}
        >
          <span className={style.span}>
            <i className="fas fa-sun"></i>
          </span>
          <span className={style.span}>
            <i className="fas fa-moon"></i>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
