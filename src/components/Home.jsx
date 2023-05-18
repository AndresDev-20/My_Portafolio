import React from 'react'
import './style/Home.css'

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
      <h2 className='Home_name'>eighteen year.</h2>
      <br />
      <span className="Home_item">soy de:</span><br />
      <h2 className='Home_name'> colombia.</h2>
      <br />
      <span className="Home_item">Mi ciudad es de:</span>
      <h2 className='Home_name'> ibague Tolima.</h2>
    </nav>
      </div>

  </section>
  )
}

export default Home
