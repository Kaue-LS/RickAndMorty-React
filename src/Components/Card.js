import { Link } from 'react-router-dom'
// import { useCallback, useEffect, useState } from 'react';



export default function Card({ personagem }) {
    // if(personagem.name.length>12){
        
        // console.log(personagem.name)
    // }

        

    

    return (
        <div className='app__list__card'>
            <Link className='app__list__card__link'
                to={{ pathname: '/sobre/' + personagem.id, state: personagem } }>
                <img className='app__list__card__img' src={"https://rickandmortyapi.com/api/character/avatar/" + personagem.id + ".jpeg"} alt={personagem.name} />
                <div className="app__list__card__data">
                    <p className="app__list__card__id">{'#'+ personagem.id }<span className={'app__list__card--'+ personagem.status}></span></p>
                    { personagem.name.length>16 ?(
                        
                    <h2 className="app__list__card__nameLength"> {personagem.name}</h2>
                    
                    ):(
                       <h2 className="app__list__card__name"> {personagem.name}</h2>
                         
                    )
                    }
                    <div className="app__list__card__info">
                        <p className='app__list__card__info__status'>Status: {personagem.status}</p>
                        <p className='app__list__card__info__species'>Specie: <span  className={'app__list__card__info--'+ personagem.species}>{personagem.species}</span></p>

                        <p></p>
                    </div>
                </div>

            </Link>
        </div>
    );

}