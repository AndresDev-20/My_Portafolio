import { useState } from "react";
import "./style/Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [Barra, setBarra] = useState(false);

  const handlePerfil = () => {
    navigate("perfil");
  };

  const handelCv = () => {
    navigate("curriculum");
  };

  const cerra = () => {
    setBarra(true);
  };
  const cerr = () => {
    setBarra(false);
  };

  return (
    <section className="Home">
      <nav className="Home__images">
        <nav className="Home__image">
          <img className="Home__image-img" src="../../image/yoo.png" alt="" />
        </nav>
        <nav className="Home__image1">
          <img
            className="Home__image-img1"
            src="../../image/fotoPresent.png"
            alt=""
          />
        </nav>
      </nav>

      <nav className="Home__info">
        <h1 className="Home__info-title">Soy Yeison Marroquin </h1>
        <span className="Home__span">Desarrollador Full Stack</span>
        <p className="Home__info-text">
          Inicié mi carrera con una gran motivación a la temprana edad de 17
          años y desde entonces, mi entusiasmo por la programación y mi deseo
          constante de aprender todo acerca de esta profesión han continuado
          creciendo. Actualmente, con 19 años de edad, he invertido tiempo y
          esfuerzo en estudiar y dominar una amplia gama de habilidades que
          encontrarás reflejadas aquí.        <Link className="ver" to="/#About"onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}><span >Ver mas</span></Link> 
        </p>
        <nav className="Home__footer">
          <button className="Home__button" onClick={handelCv}>
            Mi Cv
          </button>
        </nav>
      </nav>
      <nav className="barra">
        <a href="https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/">
          {" "}
          <button className="Home__button0">
            LinkedIn<i className="bx bxl-linkedin-square"></i>{" "}
          </button>
        </a>

        <Link
          to="/#contact"
          onClick={() =>
            document
              .querySelector("#contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {" "}
          <span>
            <button className="Home__button1">
              Email<i class="bx bx-envelope"></i>
            </button>
          </span>
        </Link>

        <a href="https://wa.me/573227222010?Hola%20quiero%20hablar%20de%20un%20empleo%20contigo">
          {" "}
          <button className="Home__button2">
            whatsapp<i class="bx bxl-whatsapp"></i>{" "}
          </button>
        </a>
        <a href="https://github.com/yeisonmarroquin887?tab=repositories">
          <button className="Home__button3">
            GitHub<i class="bx bxl-github"></i>{" "}
          </button>
        </a>
      </nav>
      <h1><i onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })} class='bx bx-chevrons-down bx_H'></i></h1>
    </section>
  );
};

export default Home;
