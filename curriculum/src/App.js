import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import NavBar from './components/navBar/navBar';
import Banner from './components/banner/banner';
import Cards from './components/cards/cards';
import Additional from './components/additional/additional';
import Contato from './components/contato/contato';
import './App.css'; 
import './transitions.css';

function App() {
  /* Define o titulo na aba usando React Helmet */
  const TITLE = 'Currículo';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <NavBar />

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={isLoaded ? location.key : 'main'} timeout={400} classNames="fade">
              <Switch location={location}>
                <Route exact path="/">
                  {/* Componentes da página inicial */}
                  <Banner />
                  <Cards />
                  <Additional />
                </Route>

                <Route path="/contato">
                  <Contato />
                </Route>

                {/* Redirecionar para a página inicial. Sem isso, a pagina inicialmente não carrega */}
                <Redirect to="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
