import React from "react";
import style from "./footer.module.scss";
import themeContext from "../themeContext";

const Footer = () => {
  const darkMode = React.useContext(themeContext);

  return (
    <footer
      className={darkMode ? [style.footer, style.dark].join(" ") : style.footer}
    >
      <a href="https://www.linkedin.com/in/maxidf/" target="_blank">
        <span className={style.socialIcon}>
          <i class="fab fa-github"></i>
        </span>
      </a>
      <a href="https://github.com/maxidefilippis" target="_blank">
      <span className={style.socialIcon}>
        <i class="fab fa-linkedin-in"></i>
      </span>
      </a>
    </footer>
  );
};

export default Footer;
