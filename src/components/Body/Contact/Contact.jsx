import React from "react";
import style from "./contact.module.scss";
import themeContext from "../../ThemeContext";

const Contact = () => {
  const darkMode = React.useContext(themeContext);

  return (
    <div id="contact" className={darkMode ? [style.contact, style.dark].join(" ") : style.contact}>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
