import './Card.scss'
import { Link } from 'react-router-dom'
// Como o card vai ser mostrado, aqui é onde vai ser feito o modelo do card de cada personagem
export default function Card({props}){
    return(
        <div className='Card'>
        <Link className='Card__Link' to={'/desc/'+props.id} state={{state:props}}>
        <img className='Card__Image' src={props.image} alt={props.name}></img>
        <div className='Card__Info'>
        <span className={`Card__Info--`+props.status}></span>    
        <h1 className='Card__Info__Name'>{props.name}</h1>
        <h1 className='Card__Info__Status'>Status:<span>{props.status}</span></h1>
        </div>
        </Link>
        </div>
    )
}