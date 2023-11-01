import "./style/proyects.css";
import { Link, useNavigate } from "react-router-dom";
const Proyects = () => {
  const navigate = useNavigate();

  const TwoProject = () => {
    navigate("/proyectTwo");
  };
  const ThreeProject = () => {
    navigate("/proyectThre");
  };
    const FourProject = () => {
    navigate("/proyectFour");
  };
  const FiveProject = () => {
    navigate("/proyectFive");
  };
  const OneProject = () => {
    navigate("/proyectOne");
  };
  const FinalProject  = () => {
    navigate("/proyects")
  }



  return (
    <article className="Proyectos" id="Proyects">
      <br /><br /><br /><br />
      <nav>
        <h1>Proyectos...</h1>
        <p>
          Aqui puedes visualizar los proyectos que he desarrollado en mi carrera
          como desarrollador...
        </p>
      </nav>

      <section>
         <nav onClick={OneProject} className="proyecto">
          <h1>E-Comerce</h1>
          <img src="../../image/mejor.png" alt="" />
          <nav className="Proyecto__text">
            <p>
            Como vez aquí tenemos un e-comerce el cual fue realizado con react, consumimos un Back-End, el cual fue realizado por mi para hacer este proyecto Full-Stack.
            </p>
          </nav>
        </nav>
        <nav onClick={TwoProject} className="proyecto">
          <h1>Pokemones</h1>
          <img src="../../image/Pokedex.jpg" alt="" />
          <nav className="Proyecto__text">
            <p>
              Como vez aquí tenemos la pokeApy un excelente proyecto que hara
              entretenerte con todos los pokemones que te mostrará, da click
              para verlo.
            </p>
          </nav>
        </nav>

        <nav onClick={ThreeProject} className="proyecto">
          <h1>Riky and mortid</h1>
          <img src="../../image/Riky.jpg" alt="" />
          <nav className="Proyecto__text">
            <p>
             Al igual que en el proyecto anterior aquí en este podemos ver los famosos personajes de la saga de Riky y Morti, que es una Entretenida saga, aquí podrás encontrar a todos sus personajes.
            </p>
          </nav>
        </nav>

        <nav onClick={FourProject} className="proyecto">
          <h1>Crud</h1>
          <img src="../../image/crud.jpg" alt="" />
          <nav className="Proyecto__text">
            <p>
            Este proyecto es una base de datos en la que se puede hacer un registro de un persona y también editarlo o eliminarlo, es una gran aplicación pruébalo tú te gustará
            </p>
          </nav>
        </nav>       
         <nav onClick={FiveProject} className="proyecto">
          <h1>Weather App</h1>
          <img src="../../image/wheather.jpg" alt="" />
          <nav className="Proyecto__text">
            <p>
            Aquí te tengo esta aplicación, que nos dice el clima que tenemos en el lugar donde estamos y también podemos buscar el clima de otros Lugares facilmente
            </p>
          </nav>
        </nav>

        <nav onClick={FinalProject} className="proyectofinal">
          <h1>Weather App</h1>
          <img src="../../image/wheather.jpg" alt="" />
          <nav className="Proyecto__textfinal">
            <p>
           Ingresa aqui para ver los demas proyectos que he realizado.
            </p>
          </nav>
        </nav>
      </section>
    </article>
  );
};

export default Proyects;
