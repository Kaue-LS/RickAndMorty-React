import "./CardList.scss";
import { useState, useEffect } from "react";
import Card from "../Cards/card";
import LoadIcon from "../Libs/LoadIcon/Load";
import SearchBar from "../SearchBar/SearchBar";
// import API from '../Libs/API/character.json'
// GERADOR DE PERSONAGENS, ELE VAI BUSCAR OS PERSONAGEMS PARA PODER SER DIRECIONADA AO ARQUIVO CARD

export default function CardList() {
  // São os UseStates, são eles:
  // 1° Armazena as informações de personagens recebidas pela api
  // 2° Armazena a quantidade de paginas que estão na array "Info" na api
  // 3° Os "loading(s)" são os que vão confirmar que os usestates estão prontos para serem exibidos na tela"
  // A page vai ter a função de mostrar em que pagina da api vai ser exibido na tela

  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [loading, setLoading] = useState(true);
  const [Pages, setPages] = useState(1);
  const [busca, setBusca] = useState([])


  // FUNÇÃO DE MUDAR A PAGINA DA API
  const ChangePagePlus = () => {
    setLoading(true);
    setPages(Pages + 1);
  };
  const ChangePageLess = () => {
    setLoading(true);
    setPages(Pages - 1);
  };

  // O USEEFFECT TEM A FUNÇÃO DE EXECUTAR AS ARROW FUNCTIONS SE AS LOADING FOREM VERDADEIRAS
  useEffect(() => {
    if (loading) {
      FetchApi(Pages);
    }
    if (loadingInfo) {
      FetchInfo();
    }
  });

  //VAI BUSCAR A ARRAY INFO DA API PARA OBTERMOS AS PAGINAS
  const FetchInfo = async () => {
    await fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((info) => {
        setInfo(info.info);
        setLoadingInfo(false);
      });
  };
  // PAGINAS TOTAL DA API
  var TotalPages = info.pages;

  // VAI BUSCAR NA API OS PERSONAGENS E SEUS DADOS
  const FetchApi = (page) => {
    if (page > 0 && page <= TotalPages) {
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((res) => res.json())
        .then((character) => {
          setCharacter([...character.results]);
          setBusca(character.results);
          setLoading(false);
        });
    }
  };
  const filterPersonagem = (evento) => {
    const filtered = busca.filter(item => item.name.toLowerCase().includes(evento.target.value.toLowerCase()))

    setCharacter(filtered)
}

  return (
    <>
      <div className="cardList">
    <SearchBar action={filterPersonagem}  ></SearchBar>
{/* Se o carregamento for falso ele vai distribuir personagem por personagem no arquivo card */}
    <div className="cardList__Card">
        {loading?
         <LoadIcon></LoadIcon>
          : 
          character.map((props, index) => 
          <Card props={props} key={index} />
          )}
  </div>

      </div>

      {loading ? (
        ""
      ) : (
        <div className="Buttons">

          {/* SE CASO A PAGINA QUE ESTA NA TELA FOR IGUAL A 1 OU FOR MENOR IGUAL A 42, QUE É A PAGINA TOTAL */}
          {Pages === 1 || Pages <= TotalPages ? (
            <button className="Buttons__Plus" onClick={() => ChangePagePlus()}>Next</button>
          ) : (
            ""
          )}
          {Pages === 1 ? (
            ''
          ) : (
            <button className="Buttons__Less" onClick={() => ChangePageLess()}>Back</button>
          )}
        </div>
      )}
    </>
  );
}
