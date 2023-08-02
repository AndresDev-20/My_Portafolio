import React from 'react'
import './style/proyects.css'
import { Link } from 'react-router-dom'
import Loading from './Loading'
const Proyects = () => {
  return (
    
    <section  className='Proyect' id='Proyects'>
    <h1  className='Proyects_Tittle'>Proyectos</h1>
    <p  className='Pro_text'>
    Estos son algunos de los trabajos que he realizado
          </p>
    <section  className='Proyects_Proyects'>
      
    <Link to="proyects"  className='Proyects_proyect'>
        <img  className='Proyects_Img' src="./image/mejor.png" alt="" />
        <nav  className='Proyects_Info'>
          <h1  className='Proyects_Name'>e-comerce con react</h1>
          <p  className='Proyects_text'>
          Como vez aquí tenemos un e-comerce el cual fue realizado con
                    react, consumimos una api la cual tiene los productos y los
                    desplegamos a todos, pero para hacer la compra deberas
                    realizar un loguin
          </p>
        </nav>
  </Link>
      <Link to="proyects"  className='Proyects_proyect'>
        <img  className='Proyects_Img' src="./image/Pokedex.jpg" alt="" />
        <nav  className='Proyects_Info'>
          <h1  className='Proyects_Name'>La pokeApi</h1>
          <p  className='Proyects_text'>
                       Como vez aquí tenemos la pokeApy un excelente proyecto que hara
                       entretenerte con todos los pokemones que te mostrará
          </p>
        </nav>
      </Link>

      <Link to="proyects"  className='Proyects_proyect'>
        <img  className='Proyects_Img' src="./image/Riky.jpg" alt="" />
        <nav  className='Proyects_Info'>
          <h1  className='Proyects_Name'> riky and morti</h1>
          <p  className='Proyects_text'>
          Al igual que en el proyecto anterior aquí en este podemos ver los famosos
            personajes de la saga de Riky y Morti, que es una
            Entretenida saga, aquí podrás encontrar a todos sus personajes.
          </p>
        </nav>
      </Link>

      <Link to="proyects"  className='Proyects_proyect'>
        <img  className='Proyects_Img' src="./image/crud.jpg" alt="" />
        <nav  className='Proyects_Info'>
          <h1  className='Proyects_Name'>Crud</h1>
          <p  className='Proyects_text'>
          Este proyecto es una base de datos en la que se puede hacer un registro de un
            persona y también editarlo o eliminarlo, es una gran aplicación pruébalo tú
            te gustará
          </p>
        </nav>
      </Link>

      <Link to="proyects"  className='Proyects_proyect'>
        <img  className='Proyects_Img' src="./image/wheather.jpg" alt="" />
        <nav  className='Proyects_Info'>
          <h1  className='Proyects_Name'>Weather App</h1>
          <p  className='Proyects_text'>
          Aquí te tengo esta aplicación, que nos dice el clima que tenemos en el
            lugar donde estamos y también podemos buscar el clima de otros
            Lugares facilmente
          </p>
          <div  className='Proyects_click'>
          </div>
        </nav>
      </Link>
    </section>
    
         <Link to="proyects">
         <div className='proyects_Todos'>
    <h1>ingresa aqui, donde podras ver  todos mis proyectos</h1>
    </div>
    </Link>
    
 
  </section>
  )
}

export default Proyects
