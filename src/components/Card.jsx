import './Card.css'
import { Link } from 'react-router-dom'

function Card({title, description}){
    return (
        <div className="Card">
           <Link to={title}><h1 className='text-dark'>{title}</h1></Link> 
            <p className='text-dark'>{description}</p>
        </div>
    )
}

export default Card