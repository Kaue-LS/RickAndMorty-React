import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CardList from './components/Cards/cardList'
import Desc from './components/Desc/Desc'
import NavBar from "./components/NavBar/NavBar";

//ARQUIVO COM REACT ROUTER DOM QUE CONECTARA AS PAGINAS QUE VAO APARECER NA TELA 

export default function Router(){
    return(
        <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
            <Route path='/' element={<CardList/>} />
            <Route path='/desc/:id' element={<Desc/>}/>
        </Routes>
        </BrowserRouter>
    )
}