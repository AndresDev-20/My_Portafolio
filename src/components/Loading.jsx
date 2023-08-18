import React from 'react'
import './style/loanding.css'
const Loading = ({Isloanding}) => {
  return (
    
          <div className={`isLoading ${Isloanding && 'show-isLoading'}`}>
           <div className='isLoading_padre-img'>
        <div className='isLodiadig_img-container'>
          <img className='isLodiadig_img' src="./image/carga.jpg" alt="" />
        </div>
      </div>
           
            <h1>{`<Yeison/>`}</h1>
        </div>
    
  )
}

export default Loading
