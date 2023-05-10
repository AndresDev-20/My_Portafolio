import React from 'react'
import './style/footer.css'
const Footer = () => {
  return (
    <div>
        <footer className="footer">
          <nav>
             <h1 className='footer_tittle'>Programmer</h1>
         <h2 className='footer_name'>Yeison Andres Marroquin Bernal</h2>
          </nav>
        
         <nav className='footer_perfiles'>
             <nav className='imagess'>
               <a className='imagess' href="https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BUzh7m0neS1qqVJbUPpvFMg%3D%3D"><img  src="./image/lin.png" alt="" /> </a>  

             </nav>
             <nav className='ima'>
                <a className='images' href="https://github.com/yeisonmarroquin887"><img src="./image/git.png" alt="" /></a>  
             </nav>
           
         
         </nav>
         <span className='fin'>Copyright © 2023 Yeison Marroquin.</span>
           <h3 className='f'>"Never stop fighting for your dreams because every day that passes you are closer"</h3>
        </footer>
    </div>
  )
}

export default Footer
