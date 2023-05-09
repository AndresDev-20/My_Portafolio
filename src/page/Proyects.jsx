import React from 'react'

const Proyects = () => {
  return (
    <section  className='Proyects'>
    <h1  className='Proyects_tittle'>Proyects</h1>
    <section  className='Proyects_proyects'>
      <nav  className='Proyects_proyect'>
        <img  className='Proyects_img' src="./image/Pokedex.jpg" alt="" />
        <nav  className='Proyects_info'>
          <h1  className='Proyects_name'>the pokeApy</h1>
          <p  className='Proyects_text'>
            As once here we have the pokeApy an excellent project which will
            entertain you with all the pokemon that will show you
          </p>
          <div  className='Proyects_click'>
            <a href="">
               <h1  className='Proyects_ingresar'>More information</h1>
            </a>
           
          </div>
        </nav>
      </nav>

      <nav  className='Proyects_proyect'>
        <img  className='Proyects_img' src="./image/Riky.jpg" alt="" />
        <nav  className='Proyects_info'>
          <h1  className='Proyects_name'>Project riky and morti</h1>
          <p  className='Proyects_text'>
            As in the previous project here in this we can see the famous
            characters of the saga of Riky and Morti, which is a very
            entertaining saga, because here you can find all its characters.
          </p>
          <div  className='Proyects_click'>
          <a href="">
               <h1  className='Proyects_ingresar'>More information</h1>
            </a>
          </div>
        </nav>
      </nav>

      <nav  className='Proyects_proyect'>
        <img  className='Proyects_img' src="./image/crud.jpg" alt="" />
        <nav  className='Proyects_info'>
          <h1  className='Proyects_name'>Crud</h1>
          <p  className='Proyects_text'>
            This project is a database in which you can make a record of a
            person and also edit or delete it, it is a great app try it you
            will like it
          </p>
          <div  className='Proyects_click'>
          <a href="">
               <h1  className='Proyects_ingresar'>More information</h1>
            </a>
          </div>
        </nav>
      </nav>

      <nav  className='Proyects_proyect'>
        <img  className='Proyects_img' src="./image/wheather.jpg" alt="" />
        <nav  className='Proyects_info'>
          <h1  className='Proyects_name'>Weather App</h1>
          <p  className='Proyects_text'>
            Here I have this app, which tells us the weather we have in the
            place where we are and we can also look for the weather of other
            places
          </p>
          <div  className='Proyects_click'>
          <a href="">
               <h1  className='Proyects_ingresar'>More information</h1>
            </a>
          </div>
        </nav>
      </nav>
    </section>
 
  </section>
  )
}

export default Proyects
