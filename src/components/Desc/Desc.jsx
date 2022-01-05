import './Desc.scss'
import { Link, useLocation } from 'react-router-dom'

export default function Desc(){
    const Location =useLocation()
    const {state}=Location.state
    (state)

    return(
        <>
        <div className='Desc'>
            <div className='Desc__Image'>
            <img src={state.image} alt={state.name}/>
            </div>
            <aside>
            <div className='Desc__Info'>
               <div className='Desc__Info__Control'>
                   <table>Name:</table>
                   <span>{state.name}</span>
               </div>
               <div className='Desc__Info__Control'>
                   <table>Status:</table>
                   <span>{state.status}</span>
               </div>
               <div className='Desc__Info__Control'>
                   <table>Species:</table>
                   <span>{state.species}</span>
               </div>
               <div className='Desc__Info__Control'>
                   <table>Gender:</table>
                   <span>{state.gender}</span>
               </div>
               <div className='Desc__Info__Control'>
                   <table>Location:</table>
                   <span>{state.location.name}</span>
               </div>
               <div className='Desc__Info__Control'>
                   <table>Origin:</table>
                   <span>{state.origin.name}</span>
               </div>
            </div>
            </aside>
        </div>
        <Link to={'/'} style={{textDecoration:'none'}}>
       
        <button className='Back'>
        Back
        </button>
        </Link>

        </>
    )
}