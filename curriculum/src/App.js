import logo from './logo.svg';
import styles from'./App.css';
import Banner from './components/banner/banner';
import Body from './components/body/body';
import foto from './components/imagens/fotoMinha.png';
import NavBar from './components/navBar/navBar';
import Cards from './components/cards/cards';
import Additional from './components/additional/additional';
import Contato from './components/contato/contato';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'; 




function App() {
  return (
    <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Banner />
        <Cards />
        <Additional />
      </Route>
      <Route path="/contato">
        <Contato />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
