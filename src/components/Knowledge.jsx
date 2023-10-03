import React from 'react'
import './style/Knowledge.css'
import Skills from './Skills'
const Knowledge = () => {
  return (
   
    <section className="Knowledge" id='Knowledge'>
    <h1 className="Knowledge_tittle">Conocimiento</h1>
    <p  className='Knowledge_text'>
    Estas son algunas tecnologias que he aprendido hasta el momento
          </p>
          <br />
    <section className="Knowledge_knowledge">
    <section className='languaje'>
      <a href="https://developer.mozilla.org/es/docs/Web/HTML">
          <nav className="Knowledge_languaje">
          <i className='html bx bxl-html5'></i>
        <h1 className="Knowledge_name">Html</h1>
      </nav>
      </a>
        <a href="https://developer.mozilla.org/es/docs/Web/CSS">
            <nav className="Knowledge_languaje">
            <i className='bx Css bxl-css3'></i>
        <h1 className='Knowledge_name'>Css</h1>
      </nav>
        </a>
         <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
           <nav className='Knowledge_languaje'>
           <i className='bx js bxl-javascript' ></i>
        <h1 className='Knowledge_name'>JavaScript</h1>
      </nav>
         </a>
          <a href="https://react.dev/learn">
              <nav className='Knowledge_languaje'>
              <i className='bx react bxl-react' ></i>
        <h1 className='Knowledge_name'>React</h1>
      </nav>
          </a>
        <a href="https://docs.github.com/en/apps">
          <nav className='Knowledge_languaje'>
          <i className='bx git bxl-github'></i>
        <h1 className='Knowledge_name'>GitHub</h1>
      </nav>
        </a>
             <a href="https://redux.js.org/">
           <nav className='Knowledge_languaje'>
           <i className='bx redux bxl-redux' ></i>
        <h1 className='Knowledge_name'>Redux</h1>
      </nav>
         </a>
         <a href="https://wiki.postgresql.org/wiki/Main_Page/es">
           <nav className='Knowledge_languaje'>
           <i className='bx post bxl-postgresql' ></i>
        <h1 className='Knowledge_name'>SQL</h1>
      </nav>
         </a>
         <a href="https://nodejs.org/es/docs">
           <nav className='Knowledge_languaje'>
           <i className='bx node bxl-nodejs'></i>
        <h1 className='Knowledge_name'>Node.Js</h1>
      </nav>
      
         </a>
<a href="https://nodejs.org/es/docs">
  <nav className='Knowledge_languaje'>
    <i className='bx bxl-python python-icon'></i>
    <h1 className='Knowledge_name'>Python</h1>
  </nav>
</a>


        <a href="https://nodejs.org/es/docs">
           <nav className='Knowledge_languaje'>
           <i class='bx type bxl-typescript' ></i>
        <h1 className='Knowledge_name'>TypeScript</h1>
      </nav>
      
         </a>
    </section>
    
  
    </section>
    
 
  </section>
  )
}

export default Knowledge
