import React, { useState } from "react";
import "./page.style/portafolio.css";




const Portafolio = () => {

  const [close, setclose] = useState(true)
  const handelclick = () => {
     setclose(false)
  }
const handelclose = () => {
  setclose(true)
}

  return (
    <div className="Portafolio">
      <header className="Portafolio_header">
        <nav className="Portafolio_programmer">
          <h1 className="Portafolio_">Programmer</h1>
        </nav>
      
        <nav onClick={handelclick} className="Portafolio_click">
        <img className="img_menu" src="./image/menu.jpg" alt="" />
        </nav>
        <section className={`container ${close && 'close'}`}>
          <section className="Portafolio_menu">
            <span className="Portafolio_select">Home</span>
            <span className="Portafolio_select">About me</span>
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

      <section className="Portafolio_">
        <nav className="Portafolio_">
          <h1 className="Portafolio_">
            Hello, here I leave you a little of my history as a programmer...
          </h1>
          <p className="Portafolio_">
            Throughout my career as a programmer I have been through many things
            good, I have learned a lot from this profession and I feel very
            comfortable To do it every day, I am a very young boy I am only 18
            years old but Every day I study I give everything of myself and my
            goal is to program Any project to be carried out in the world of
            programming.
          </p>
        </nav>
        <nav className="Portafolio_">
          <img
            className="Portafolio_"
            src="./image/trabajo.jpg"
            alt="trabajo"
          />
        </nav>
        <nav className="Portafolio_">
          <p className="Portafolio_">
            Some time ago I did not know anything about programming and today my
            Progress has been impressive and in a very short time, I am now a
            Frot-end programmer and I feel ready to learn as much as I can From
            now on as I have been doing so far.
          </p>
        </nav>
      </section>

      <section className="Portafolio_">
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

      <section>
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

      <footer></footer>
    </div>
  );
};

export default Portafolio;
