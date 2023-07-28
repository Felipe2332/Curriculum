
import Banner from './components/banner/banner';
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
    <Router>
      
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <NavBar />
      
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={400} classNames="fade">
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
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}
export default App;
