import React, { useEffect, useState } from "react";
import style from "./header.module.scss";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitch = () => {
    setDarkMode(!darkMode);
    darkMode
      ? localStorage.setItem("DarkMode", "true")
      : localStorage.setItem("DarkMode", "false");
    let dark = localStorage.getItem("DarkMode");
    console.log(dark);
  };

  useEffect(() => {
    let dark = localStorage.getItem("DarkMode");
    setDarkMode(dark);
  }, []);

  return (
    <header className={style.header}>
      <div>Esto es el header</div>
      <button
        className={ darkMode ? style.switchDark : style.switch}
        id="switch"
        onClick={handleSwitch}
      >
        <span className={ darkMode ? [style.span, style.dark].join(" ") : style.span}>
          <i className="fas fa-sun"></i>
        </span>
        <span className={ !darkMode ? [style.span, style.light].join(" ") : style.span }>
          <i className="fas fa-moon"></i>
        </span>
      </button>
    </header>
  );
};

export default Header;
