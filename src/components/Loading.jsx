import React from 'react'
import './style/loanding.css'
const Loading = ({Isloanding}) => {
  return (
    
          <div className={`isLoading ${Isloanding && 'show-isLoading'}`}>

            <h1>{`<Yeison/> ...`}</h1>
        </div>
    
  )
}

export default Loading
