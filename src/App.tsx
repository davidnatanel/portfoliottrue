
import styled from './App.module.css';

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main';
import Proyects from './components/Proyects/Proyects';
import Contact from './components/Contact/Contact';

import Footer from './components/Footer/Footer';
import Habilidades from './components/Habilidades/Habilidades';

function App() {


  return (
    <div className={styled.containerMain}>

      <NavBar />

      <Main />

      <Proyects />
      <Habilidades />

      <Contact />
      <hr className={styled.hrs} />

      <Footer />

    </div>



  )
}

export default App
