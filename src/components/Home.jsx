import React from 'react'
import './style/Home.css'
import Perfil from '../page/Perfil'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <section className="Home" id='Home'>
      <div className='Home_center'>
            <nav className="Home_image">
      <img className="Home_img" src="./image/yeison.jpg" alt="Yeison" />
      
    </nav>
    
    <nav className="Home_info">
    <hr />
    <span className='Home_item'> Mi nombre es:</span> <br />
      <h2 className="Home_name">
      Yeison Andres Marroquin Bernal...
      </h2>
      <br />
      <span className="Home_item">Mi edad es de:</span><br />
      <h2 className='Home_name'>Dieciocho años.</h2>
      <br />
      <span className="Home_item">Soy de:</span><br />
      <h2 className='Home_name'> Colombia.</h2>
      <br />
      <span className="Home_item">Mi ciudad es de:</span>
      <h2 className='Home_name'> Ibague, Tolima.</h2>
      <Link to="/perfil"><button className='home_btn'>Ingresa aqui para ver <br /> mis certificados</button></Link>
    </nav> 
      </div>
  </section>
  
  )
}

export default Home
