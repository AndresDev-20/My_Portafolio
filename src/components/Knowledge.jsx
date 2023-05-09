import React from 'react'
import './style/Knowledge.css'
const Knowledge = () => {
  return (
   
    <section className="Knowledge">
    <h1 className="Knowledge_tittle">Knowledge</h1>
    <section className="Knowledge_knowledge">
    <section className='languaje'>
    <nav className="Knowledge_languaje">
        <img className="Knowledge_img" src="./image/html.png" alt="" />
        <h1 className="Knowledge_name">Html</h1>
      </nav>
      <nav className="Knowledge_languaje">
        <img className='Knowledge_img' src="./image/css.jpeg" alt="" />
        <h1 className='Knowledge_name'>Css</h1>
      </nav>
      <nav className='Knowledge_languaje'>
        <img className='Knowledge_img' src="./image/js.jpg" alt="" />
        <h1 className='Knowledge_name'>Js</h1>
      </nav>
      <nav className='Knowledge_languaje'>
        <img  className="Knowledge_img" src="./image/react.jpg" alt="" />
        <h1 className='Knowledge_name'>React</h1>
      </nav>
      <nav className='Knowledge_languaje'>
        <img className='Knowledge_img' src="./image/git.jpg" alt="" />
        <h1 className='Knowledge_name'>GitHub</h1>
      </nav>
      <nav className='Knowledge_languaje'>
        <img className='Knowledge_img' src="./image/redux.jpg" alt="" />
        <h1 className='Knowledge_name'>Redux</h1>
      </nav>
    </section>
    
  
    </section>
  </section>
  )
}

export default Knowledge
