import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import "./style/header.css";
import "./style/headerPro.css";
import Theme from "../tools/theme/Theme";
import Translate from "../tools/translate/Translate";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SECTIONS = [
  { id: "Start", key: "home", icon: "bx-home-alt-2" },
  { id: "About", key: "about", icon: "bx-user" },
  { id: "Skills", key: "skills", icon: "bx-code-alt" },
  { id: "Education", key: "education", icon: "bx-book-open" },
  { id: "Experience", key: "experience", icon: "bx-briefcase" },
  { id: "Projects", key: "projects", icon: "bx-folder" },
  { id: "Contact", key: "contact", icon: "bx-envelope" },
];

const Header = ({t, particles}) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Bloquea el scroll del fondo mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cierra el menú con la tecla Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(true);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setOpen(true);

    // Si estamos en otra ruta, volvemos al inicio y Home hace el scroll
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Header_div">
      <h1 className="Header_logo">
        <Link to="/" onClick={(e) => scrollTo(e, "Start")} aria-label="Andres.dev">
          {"<A.dev/>"}
        </Link>
      </h1>

      <nav className="Header_nav">
        <div className="Header_nav-tools">
          <Translate />
          <Theme particles={particles} />
        </div>
        <div className="Header_nav-toggle">
          <i
            onClick={() => setOpen(false)}
            className={open ? "bx bx-menu" : "Clear"}
            role="button"
            aria-label="Menu"
          ></i>
          <i
            onClick={() => setOpen(true)}
            className={open ? "Clear" : "bx bx-x"}
            role="button"
            aria-label="Close"
          ></i>
        </div>

        <div
          className={`Header_overlay ${open ? "" : "open"}`}
          onClick={() => setOpen(true)}
          aria-hidden="true"
        ></div>

        {/* 🔥 Scrollspy: resalta el item activo */}
        <Scrollspy
          items={SECTIONS.map((s) => s.id)}
          currentClassName="Header_active"
          className={`Header_nav-list ${open ? "" : "open"} ${
            location.pathname === "/" ? "" : "Header_nav-list--away"
          }`}
          offset={-100}
        >
          {SECTIONS.map((section, index) => (
            <li
              className="Header_nav-item"
              key={section.id}
              style={{ "--i": index }}
            >
              <a href={`#${section.id}`} onClick={(e) => scrollTo(e, section.id)}>
                <i className={`Header_nav-icon bx ${section.icon}`}></i>
                {t(`Header.${section.key}`)}
              </a>
            </li>
          ))}
        </Scrollspy>
      </nav>
    </div>
  );
};

export default Header;
