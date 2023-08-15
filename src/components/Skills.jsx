import React from 'react'
import './style/skills.css'

const Skills = () => {
    return (
        <div className='skills sec'>
            <div className="div-bg">
                <div></div>
            </div>
            <div className="content-skills grilla">
                <h3 className='sub-title'>Habilidades</h3>
                <h4>Desempeño en distintas áreas</h4>

                <div className="box-skills">

                    <div className="box">
                        <span>HTML</span>
                        <div className="skill-padre">
                            <div className="skill-hijo"></div>
                        </div>
                    </div>

                    <div className="box">
                        <span>CSS</span>
                        <div className="skill-padre">
                            <div className="skill-hijo"></div>
                        </div>
                    </div>

                    <div className="box">
                        <span>JavasCript</span>
                        <div className="skill-padre">
                            <div className="skill-hijo"></div>
                        </div>
                    </div>

                    <div className="box">
                        <span>REACT</span>
                        <div className="skill-padre">
                            <div className="skill-hijo"></div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Skills