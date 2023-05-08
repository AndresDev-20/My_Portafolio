import React from 'react'
import './style/Home.css'

const Home = () => {
  return (
    <section className="Home">
      <div className='Home_center'>
            <nav className="Home_image">
      <img className="Home_img" src="./image/yeison.jpg" alt="Yeison" />
      
    </nav>
    
    <nav className="Home_info">
    <br />
    <hr />
    <br />
    <span className='Home_item'> My name is.</span> <br />
      <h2 className="Home_name">
      Yeison Andres Marroquin Bernal...
      </h2>
      <span className="Home_item">My age is .</span><br />
      <h2 className='Home_name'>eighteen year.</h2>
      <span className="Home_item">i am from.</span><br />
      <h2 className='Home_name'> colombia.</h2>
      <span className="Home_item">Live in the city of.</span>
      <h2 className='Home_name'> ibague.</h2>
    </nav>
      </div>

  </section>
  )
}

export default Home
