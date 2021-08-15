import Card from "../Components/Card"
import { useEffect, useState } from 'react';
import SearchBox from "../Components/SearchBox";


export default function CardList() {
    const [personagens, setPersonagens] = useState([]);
    const [busca, setBusca] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    // const [dados,setDados] = useState([])




    // const buscaPersonagens = () => {
    //         fetch("https://rickandmortyapi.com/api/character")
    //             .then(res => res.json())
    //             .then((personagem) => {

    //                     setPersonagens(personagem.results)
    //                     setBusca(personagem.results)
                    
    //                     setLoading(false)

    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //                 setLoading(true)
    //             })
    //     }
    
    const buscaPersonagens = (page) => {
        fetch(`https://rickandmortyapi.com/api/character/?page=1`)
            .then(res => res.json())
            .then((personagem) => {

                setPersonagens(personagem.results);
                setBusca(personagem.results);
                console.log(page)
                setLoading(false);

                // buscaPersonagens(personagem.info.next)

            })
        
            .catch((error) => {
                console.log(error)
                setLoading(true)
            })
    
}






// console.log(page)


useEffect(() => {
    buscaPersonagens(page);
},);
//  useEffect(() => {
//         buscaPersonagens();
//     },);
    
// const nextPage = (page)=>{
//     setPage( page + 1)
// }

const filterPersonagem = (evento) => {
    const filtered = busca.filter(item => item.name.includes(evento.target.value))

    setPersonagens(filtered)
}

return (
    <div className='app'>
        <SearchBox className='app__search' placeholder='Buscar personagem' action={filterPersonagem}></SearchBox>
        <div className='app__list'>
            { 
            loading ? ('Carregando' ) 
            : ( personagens.map((personagens) => (
                    <>
                        <Card personagem={personagens} key={personagens.id}></Card>
                    </>
                ))
            )
            

            }

{/* <button className='app__button' onClick={()=>nextPage(page)}>Mais</button> */}
<button>Mais</button>



        </div>
    </div>
)
}
