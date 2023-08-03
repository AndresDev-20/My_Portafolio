import React from 'react'
import ProyectTwo from '../components/proyectInfo/ProyectTwo'
import Header from '../components/Header'
import './page.style/proyectone.css'

const ProyectTwoo = () => {
  return (
    <div>
          <div className='Proyectone'>
      <Header/>
      <div className={close ? 'ProductInfo' : 'productClose'}>
        <ProyectTwo/>
      </div>
    </div>
    </div>
  )
}

export default ProyectTwoo
