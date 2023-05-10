import React, { useState } from 'react'
import './page.style/proyects.css'
import Loading from '../components/Loading'
const Proyectss = ({handelclose}) => {
  const [Isloanding, setIsloanding] = useState(true)
  
  setTimeout(() => {
    setIsloanding(false);
  }, 3050);
  return (
    <>
    {
      Isloanding
      ? <Loading Isloanding={Isloanding}/>
      : <div>
         <header className='proyects_header'>
        <a href="#"><h1 onClick={handelclose} className='h1'>return</h1></a>  
        </header>
        <section  className='Proyects'>
      <h1  className='Proyects_tittle'>Proyects</h1>
      <p className='Proyect_text'>"These are my projects that I have done in my career, to see any of them you just have to click on one."</p>
      <section  className='Proyects_proyects'>
        <nav  className='Proyects_proyect'>
        <video className='Proyects_vid' src="./image/Pokedex.mp4" autoPlay muted preload loop></video>
          <nav  className='Proyects_info'>
            <h1  className='Proyects_name'>the pokeApy</h1>
            <p  className='Proyects_text'>
              As once here we have the pokeApy an excellent project which will
              entertain you with all the pokemon that will show you
            </p>
          
          </nav>
        </nav>
  
        <nav  className='Proyects_proyectO'>
        <video className='Proyects_vid' src="./image/riky.mp4" autoPlay muted preload loop></video>
          <nav  className='Proyects_info'>
            <h1  className='Proyects_name'>Project riky and morti</h1>
            <p  className='Proyects_text'>
              As in the previous project here in this we can see the famous
              characters of the saga of Riky and Morti, which is a very
              entertaining saga, because here you can find all its characters.
            </p>
            
          </nav>
        </nav>
  
        <nav  className='Proyects_proyectO'>
        <video className='Proyects_vid' src="./image/Crud.mp4" autoPlay muted preload loop></video>
          <nav  className='Proyects_info'>
            <h1  className='Proyects_name'>Crud</h1>
            <p  className='Proyects_text'>
              This project is a database in which you can make a record of a
              person and also edit or delete it, it is a great app try it you
              will like it
            </p>
      
          </nav>
        </nav>
  
        <nav  className='Proyects_proyectO'>
        <video className='Proyects_vid' src="./image/weather.mp4" autoPlay muted preload loop></video>
          <nav  className='Proyects_info'>
            <h1  className='Proyects_name'>Weather App</h1>
            <p  className='Proyects_text'>
              Here I have this app, which tells us the weather we have in the
              place where we are and we can also look for the weather of other
              places
            </p>
           
          </nav>
        </nav>
        <nav  className='Proyects_proyectO'>
        <video className='Proyects_vid' src="./image/e-comerce.mp4" autoPlay muted preload loop></video>
          <nav  className='Proyects_info'>
            <h1  className='Proyects_name'>e-comerce</h1>
            <p  className='Proyects_text'>
              As once here we have the pokeApy an excellent project which will
              entertain you with all the pokemon that will show you
            </p>
          
          </nav>
        </nav>
  
        <nav  className='Proyects_proyectO'>
        <video className='Proyects_vid' src="./image/fortuna.mp4" autoPlay muted preload loop></video>
          <nav  className='Proyects_info'>
            <h1  className='Proyects_name'>fortune cookies</h1>
            <p  className='Proyects_text'>
              As in the previous project here in this we can see the famous
              characters of the saga of Riky and Morti, which is a very
              entertaining saga, because here you can find all its characters.
            </p>
           
          </nav>
        </nav>
  
        <nav  className='Proyects_proyectO'>
        <video className='Proyects_vid' src="./image/guarderia.mp4" autoPlay muted preload loop></video>
          <nav  className='Proyects_info'>
            <h1  className='Proyects_name'>Canine and feline nursery</h1>
            <p  className='Proyects_text'>
              This project is a database in which you can make a record of a
              person and also edit or delete it, it is a great app try it you
              will like it
            </p>
       
          </nav>
        </nav>
  
        <nav  className='Proyects_proyectO'>
        <video className='Proyects_vid' src="./image/people.mp4" autoPlay muted preload loop></video>
          <nav  className='Proyects_info'>
            <h1  className='Proyects_name'>peoples</h1>
            <p  className='Proyects_text'>
              Here I have this app, which tells us the weather we have in the
              place where we are and we can also look for the weather of other
              places
            </p>
      
          </nav>
        </nav>
  
      </section>
   
    </section>
         </div>
}
        
        
      
    
    </>
  
  )
}

export default Proyectss
