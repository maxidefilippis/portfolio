import React, { useState } from "react";
import style from "./contact.module.scss";
import themeContext from "../../ThemeContext";

const Contact = () => {
  const darkMode = React.useContext(themeContext);
  const [values, setValues] = useState({
    name: "",
    mail: "",
    subject: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.prevent.default();
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value});
  };

  return (
    <div
      id="contact"
      className={
        darkMode ? [style.contact, style.dark].join(" ") : style.contact
      }
    >
      <h1>Contact</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={
            darkMode ? [style.input, style.dark].join(" ") : style.input
          }
          type="text"
          name="name"
          id="1"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className={
            darkMode ? [style.input, style.dark].join(" ") : style.input
          }
          type="mail"
          name="mail"
          id="2"
          value={values.mail}
          onChange={handleChange}
          placeholder="Mail"
        />
        <input
          className={
            darkMode ? [style.input, style.dark].join(" ") : style.input
          }
          type="text"
          name="subject"
          id="3"
          value={values.subject}
          onChange={handleChange}
          placeholder="Subject"
        />
        <input
          className={
            darkMode ? [style.input, style.dark].join(" ") : style.input
          }
          type="text"
          name="content"
          id="3"
          value={values.content}
          onChange={handleChange}
          placeholder="Message"
        />
        <button className={style.button}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
