import React from "react";
import style from "./home.module.scss";
import imgDark from "../../../img/perfilDark.jpg";
import themeContext from "../../themeContext";

const Home = () => {
  const darkMode = React.useContext(themeContext);

  return (
    <div id="home" className={darkMode ? [style.home, style.dark].join(" ") : style.home}>
      
      <img className={style.img} src={imgDark} alt="perfil" />
      <div className={style.description}>
        <h1 className={`${style.name} animate__animated animate__flash`}>Maxi De Filippis</h1>
        <h2 className={style.profesion}>FULL STACK DEVELOPER</h2>
      </div>
    </div>
  );
};

export default Home;
