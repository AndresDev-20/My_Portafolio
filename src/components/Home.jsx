import './style/Home.css'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handlePerfil = () => {
    navigate('perfil')
  }

  const handelCv = () => {
       navigate('curriculum')
  }

  return (
    
    <section className="Home" id='Home'>
       
      <div className='Home_center'>
            <nav className="Home_image">
      <img className="Home_img" src="./image/i.jpg" alt="Yeison" />
      
    </nav>
    
    <nav className="Home_info">
    <hr />
    <h1 className='titlePerfil'>Bienvenido a mi Portafolio</h1>
   <p className='parrafo'>

   Soy desarrollador front-end me especializo en HTML, CSS,
              JAVASCRIPT, REACT Y REDUX. Inicie mi carrera con una gran
              motivacion, tengo 18 años de edad y siempre me ha gustado el tema de
              programar y aprender todo acerca de esta profesion.
   </p>
   <div className='cvandcer'>
        <button onClick={handelCv} className='home_btn'>Mi Cv</button>
        <button onClick={handlePerfil} className='home_btn'>Mis certificados</button>
      </div>
    </nav> 
    
      </div>
  </section>
  
  )
}

export default Home
