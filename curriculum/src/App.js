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
import { Helmet } from 'react-helmet';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transitions.css'


function App() {
  /*Define o titulo na aba usando React Helmet*/
  const TITLE = 'Currículo';
  

  return (
    <>
    <Helmet>
    <title>{TITLE}</title>
    </Helmet>

    <Router>
    <NavBar />

    
      <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={600}/*No maximo 0,5 segundos de animação*/
                classNames="fade" >
                
                <Switch location={location}>


                <Route exact path="/">
        <Banner />
        <Cards />
        <Additional />
      </Route>


      <Route path="/contato">
        <Contato />
      </Route>
    </Switch>
    </CSSTransition>
  </TransitionGroup>
  )}
  />
  </Router>

  </>
  );
}

export default App;
