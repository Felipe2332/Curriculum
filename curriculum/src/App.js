import logo from './logo.svg';
import styles from'./App.css';
import Banner from './components/banner/banner';
import Body from './components/body/body';
import foto from './components/imagens/fotoMinha.png';
import NavBar from './components/navBar/navBar';
import Cards from './components/cards/cards';
import Additional from './components/additional/additional';


function App() {
  return (

    <>
    
    <NavBar />
    <Banner/> 
    <Cards/>
    <Additional/>

    

    </>
    
  );
}

export default App;
