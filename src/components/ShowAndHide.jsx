import React from 'react'
import { useState } from 'react'

export const ShowAndHide = () => {
    const [show, setShow] = useState(true)
    
    const handleClick = (event) =>{
        setShow(!show)
    }

  return (
    <div>
    <button onClick={handleClick}>{show ? "Hide" : "Show"} text</button> 
           {show && <h1>Hide me!</h1>}
    </div>
  )
}
