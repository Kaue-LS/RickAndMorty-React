import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CardList from"./Components/CardList";
import "./styles/main.scss";
import './styles/Desc.scss';
// import EpList from '../src/Components/EpList'
 import Desc from "./Components/Desc"
function App() {
  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route path='/'exact={true} component={CardList}/>
            <Route path='/sobre/:id' component={Desc}/>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
