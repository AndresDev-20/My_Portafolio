import React from 'react'
import Header from '../components/Header'
import './page.style/proyectone.css'
import ProyectFivee from '../components/proyectInfo/ProyectFivee'

const ProyectFive = () => {
  return (
    <div>
                 <div className='Proyectone'>
      <Header/>
      <div className={close ? 'ProductInfo' : 'productClose'}>
        <ProyectFivee/>
      </div>
    </div>
    </div>
  )
}

export default ProyectFive
