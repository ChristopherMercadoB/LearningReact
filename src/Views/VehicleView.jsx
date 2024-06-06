import React from 'react'
import './VehicleView.css'
import { Link } from 'react-router-dom'

const VehicleView = ({vehicle}) => {
  return (
    <div>
        <h1>{vehicle.name}</h1>
        <h2>{vehicle.description}</h2>
        <div className='imageContainer'>     
            <img className='img' src={vehicle.image} alt={vehicle.name + " image"} />
        </div>

        <Link to={'/'}><button>Back Home</button></Link>
    </div>
  )
}

export default VehicleView