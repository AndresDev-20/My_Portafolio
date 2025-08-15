import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import "./style/header.css";
import Theme from "../tools/theme/Theme";
import Translate from "../tools/translate/Translate";
import { Link } from "react-router-dom";

const Header = ({t}) => {
  const [open, setOpen] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setTimeout(() => {
    setOpen(true);
  }, 1000); 
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Header_div">
      <h1 className="Header_logo"><Link href="#home" onClick={(e) => scrollTo(e, "Start")}>{"<A.dev/>"}</Link></h1>

      <nav className="Header_nav">
        <div className="Header_nav-tools">
          <Translate />
          <Theme />
        </div>
        <div className="Header_nav-toggle">
          <i
            onClick={() => setOpen(false)}
            className={open ? "bx bx-menu" : "Clear"}
          ></i>
          <i
            onClick={() => setOpen(true)}
            className={open ? "Clear" : "bx bx-x"}
          ></i>
        </div>

        {/* 🔥 Scrollspy: resalta el item activo */}
        <Scrollspy
          items={[
            "Start",
            "About",
            "Skills",
            "Education",
            "Experience",
            "Projects",
            "Contact",
          ]}
          currentClassName="Header_active"
          className={`Header_nav-list ${open ? "" : "open"}`}
          offset={-100}
        >
          <li className="Header_nav-item">
            <Link href="#home" onClick={(e) => scrollTo(e, "Start")}>
              {t("Header.home")}
            </Link>
          </li>
          <li className="Header_nav-item">
            <Link href="#about" onClick={(e) => scrollTo(e, "About")}>
              {t("Header.about")}
            </Link>
          </li>
          <li className="Header_nav-item">
            <Link href="#skills" onClick={(e) => scrollTo(e, "Skills")}>
              {t("Header.skills")}
            </Link>
          </li>
          <li className="Header_nav-item">
            <Link href="#education" onClick={(e) => scrollTo(e, "Education")}>
              {t("Header.education")}
            </Link>
          </li>
          <li className="Header_nav-item">
            <Link href="#experience" onClick={(e) => scrollTo(e, "Experience")}>
              {t("Header.experience")}
            </Link>
          </li>
          <li className="Header_nav-item">
            <Link href="#projects" onClick={(e) => scrollTo(e, "Projects")}>
              {t("Header.projects")}
            </Link>
          </li>
          <li className="Header_nav-item">
            <Link href="#contact" onClick={(e) => scrollTo(e, "Contact")}>
              {t("Header.contact")}
            </Link>
          </li>
        </Scrollspy>
      </nav>
    </div>
  );
};

export default Header;
