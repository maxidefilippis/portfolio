import React from "react";
import style from "./footer.module.scss"
import themeContext from "../themeContext"

const Footer = () => {
    const darkMode = React.useContext(themeContext);

    return(
        <footer className={darkMode ? [style.footer, style.dark].join(" ") : style.footer}>
            Este es el footer
        </footer>
    )
}

export default Footer;