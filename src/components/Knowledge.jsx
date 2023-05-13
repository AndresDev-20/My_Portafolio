import React from 'react'
import './style/Knowledge.css'
const Knowledge = () => {
  return (
   
    <section className="Knowledge" id='Knowledge'>
    <h1 className="Knowledge_tittle">Knowledge</h1>
    <p  className='Knowledge_text'>
    These are some of the languages I've learned
          </p>
          <br />
    <section className="Knowledge_knowledge">
    <section className='languaje'>
      <a href="https://developer.mozilla.org/es/docs/Web/HTML">
          <nav className="Knowledge_languaje">
        <img className="Knowledge_img" src="./image/html.png" alt="" />
        <h1 className="Knowledge_name">Html</h1>
      </nav>
      </a>
        <a href="https://developer.mozilla.org/es/docs/Web/CSS">
            <nav className="Knowledge_languaje">
        <img className='Knowledge_img' src="./image/css.jpeg" alt="" />
        <h1 className='Knowledge_name'>Css</h1>
      </nav>
        </a>
         <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
           <nav className='Knowledge_languaje'>
        <img className='Knowledge_img' src="./image/js.jpg" alt="" />
        <h1 className='Knowledge_name'>Js</h1>
      </nav>
         </a>
          <a href="https://react.dev/learn">
              <nav className='Knowledge_languaje'>
        <img  className="Knowledge_img" src="./image/react.jpg" alt="" />
        <h1 className='Knowledge_name'>React</h1>
      </nav>
          </a>
        <a href="https://docs.github.com/en/apps">
          <nav className='Knowledge_languaje'>
        <img className='Knowledge_img' src="./image/git.jpg" alt="" />
        <h1 className='Knowledge_name'>GitHub</h1>
      </nav>
        </a>
         <a href="https://redux.js.org/">
           <nav className='Knowledge_languaje'>
        <img className='Knowledge_img' src="./image/redux.jpg" alt="" />
        <h1 className='Knowledge_name'>Redux</h1>
      </nav>
         </a>
    </section>
    
  
    </section>
  </section>
  )
}

export default Knowledge