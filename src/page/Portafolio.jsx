import React, { useState } from "react";
import "./page.style/portafolio.css";
import About from "../components/About";




const Portafolio = () => {

  const [close, setclose] = useState(true)
  const handelclick = () => {
     setclose(false)
  }
const handelclose = () => {
  setclose(true)
}

  return (
    <div id="home" className="Portafolio">
      <header className="Portafolio_header">
        <nav className="Portafolio_programmer">
          <h1 className="Portafolio_">Programmer</h1>
        </nav>
      
        <nav onClick={handelclick} className="Portafolio_click">
        <img className="img_menu" src="./image/menu.jpg" alt="" />
        </nav>
        <section className={`container ${close && 'close'}`}>
          <section className="Portafolio_menu">
           <a href="#"><span className="Portafolio_select">Home</span></a>
           <a href=""><span  className="Portafolio_select">About me</span></a> 
            <span className="Portafolio_select">Knowledge</span>
            <span className="Portafolio_select">Proyects</span>
            <span className="Portafolio_select">Contact me</span>
            <span onClick={handelclose} className="Portafolio_select return">return</span>
          </section>
        </section>
      </header>

      <section className="Portafolio_">
        <nav className="Portafolio_">
          <img className="Portafolio_" src="./image/yeison.jpg" alt="Yeison" />
        </nav>
        <nav className="Portafolio_">
          <h2 className="Portafolio_">
            My name is Yeison Andres Marroquin Bernal
          </h2>
          <span className="Portafolio_">My age is eighteen year</span>
          <span className="Portafolio_">i am from colombia</span>
          <span className="Portafolio_">Live in the city of ibague</span>
        </nav>
      </section>
       <About/>

      <section id="Knowledge" className="Portafolio_">
        <h1 className="Portafolio_">Knowledge</h1>
        <section className="Portafolio_">
          <nav className="Portafolio_">
            <img className="Portafolio_" src="" alt="" />
            <h1 className="Portafolio_">Html</h1>
          </nav>
          <nav className="Portafolio_">
            <img src="" alt="" />
            <h1>Css</h1>
          </nav>
          <nav>
            <img src="" alt="" />
            <h1>Js</h1>
          </nav>
          <nav>
            <img src="" alt="" />
            <h1>React</h1>
          </nav>
          <nav>
            <img src="" alt="" />
            <h1>GitHub</h1>
          </nav>
          <nav>
            <img src="" alt="" />
            <h1>Redux</h1>
          </nav>
        </section>
      </section>

      <section id="Proyects">
        <h1>Proyects</h1>
        <section>
          <nav>
            <img src="" alt="" />
            <nav>
              <h1>the pokeApy</h1>
              <p>
                As once here we have the pokeApy an excellent project which will
                entertain you with all the pokemon that will show you
              </p>
              <div>
                <h1>More information</h1>
              </div>
            </nav>
          </nav>

          <nav>
            <img src="" alt="" />
            <nav>
              <h1>Project riky and morti</h1>
              <p>
                As in the previous project here in this we can see the famous
                characters of the saga of Riky and Morti, which is a very
                entertaining saga, because here you can find all its characters.
              </p>
              <div>
                <h1>More information</h1>
              </div>
            </nav>
          </nav>

          <nav>
            <img src="" alt="" />
            <nav>
              <h1>Crud</h1>
              <p>
                This project is a database in which you can make a record of a
                person and also edit or delete it, it is a great app try it you
                will like it
              </p>
              <div>
                <h1>More information</h1>
              </div>
            </nav>
          </nav>

          <nav>
            <img src="" alt="" />
            <nav>
              <h1>Weather App</h1>
              <p>
                Here I have this app, which tells us the weather we have in the
                place where we are and we can also look for the weather of other
                places
              </p>
              <div>
                <h1>More information</h1>
              </div>
            </nav>
          </nav>
        </section>
      </section>

      <section id="concatc">
        contatme
      </section>

      <footer></footer>
    </div>
  );
};

export default Portafolio;
