import React from "react";
import style from "./home.module.scss";
import img from "../../../img/perfil.jpg";
import themeContext from "../../themeContext";

const Home = () => {
  const darkMode = React.useContext(themeContext);

  return (
    <div className={darkMode ? [style.home, style.dark].join(" ") : style.home}>
      <img className={style.img} src={img} alt="foto de perfil" />
      <div className={style.description}>
        <h1>MAXI DE FILIPPIS</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
    </div>
  );
};

export default Home;
