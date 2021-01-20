import React from "react";
import style from "./footer.module.scss";
import themeContext from "../themeContext";

const Footer = () => {
  const darkMode = React.useContext(themeContext);

  return (
    <footer
      className={darkMode ? [style.footer, style.dark].join(" ") : style.footer}
    >
      <a
        className={darkMode ? [style.socialIcon, style.dark].join(" ") : style.socialIcon}
        href="https://www.linkedin.com/in/maxidf/"
        target="_blank"
      >
        <i class="fab fa-github"></i>
      </a>

      <a
        className={darkMode ? [style.socialIcon, style.dark].join(" ") : style.socialIcon}
        href="https://github.com/maxidefilippis"
        target="_blank"
      >
        <i class="fab fa-linkedin-in"></i>
      </a>
    </footer>
  );
};

export default Footer;
