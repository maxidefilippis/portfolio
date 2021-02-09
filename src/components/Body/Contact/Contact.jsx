import React, { useState } from "react";
import style from "./contact.module.scss";
import themeContext from "../../ThemeContext";
import emailjs from "emailjs-com";

const Contact = () => {
  const darkMode = React.useContext(themeContext);
  const [values, setValues] = useState({
    name: "",
    mail: "",
    subject: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      from_name: values.name,
      from_email: values.mail,
      message: values.content,
      subject: values.subject,
    };
    emailjs
      .send(
        "service_zh96avq",
        "template_8vqgrvd",
        data,
        "user_sXnaVrj7W8RvuNT4eH87H"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("El correo se ha enviado de forma exitosa");
        },
        (error) => {
          console.log(error.text);
          alert("Ocurrió un problema al enviar el correo");
        }
      );
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
        <button className={style.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
