import React, { useContext } from "react";
import style from "./header.module.scss";
import themeContext from "../themeContext";

const Header = ({ toggleTheme, theme }) => {
  const darkMode = useContext(themeContext);

  return (
    <header
      className={darkMode ? [style.header, style.dark].join(" ") : style.header}
    >
      <div>Esto es el header</div>
      <div className={style.switchSection}>
        <span>{darkMode ? "LightMode" : "DarkMode"}</span>
        <button
          className={
            !darkMode ? [style.switch, style.active].join(" ") : style.switch
          }
          id="switch"
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
