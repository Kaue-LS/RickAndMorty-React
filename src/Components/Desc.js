

import { Link } from 'react-router-dom'



export default function Descricao(props) {
     
   
    // console.log(props.location.state)
const personagem = props.location.state
// return(
//     <p>{personagem.status}</p>
// )

return (
    <div className='app__desc'>

        <div className='app__desc__block'>
            <div className='app__desc__block__image'>
            <img className={'app__desc__block__image--'+ personagem.status} src={personagem.image} alt={personagem.name} />
            <h1 className='app__desc__block__name'>{personagem.name}</h1>

            </div>
            <div className='app__desc__characteristic'>

                <div className='app__desc__characteristic__schema'>
                    <p ><strong>Specie: </strong><span className={'app__desc--' + personagem.species}>{personagem.species}</span> </p>
                    <p><strong>Status: </strong> <span className={'app__desc--' + personagem.status} >{personagem.status}</span></p>
                    {personagem.type === '' ? (
                        <p><strong></strong> <span className={'app__desc--' + personagem.type} ></span></p>
                    ) : (<p><strong>Type: </strong> <span className={'app__desc--' + personagem.type} >{personagem.type}</span></p>)
                    }
                    <p><strong>Origin: </strong> <span className={'app__desc--' + personagem.origin.name} >{personagem.origin.name}</span></p>
                    <p><strong>Gender: </strong> <span className={'app__desc--' + personagem.gender} >{personagem.gender}</span></p>
                    <p><strong>Created: </strong> <span className={'app__desc--' + personagem.gender} >{personagem.created}</span></p>

                </div>
                <Link className='app__desc__button' to='/'>Voltar</Link>

            </div>
        </div>
        
             
       

        


    </div>
);
}

