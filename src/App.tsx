import { useState } from 'react'
import styled from './App.module.css';

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main';
import Proyects from './components/Proyects/Proyects';
import Contact from './components/Contact/Contact';
import Experiencie from './components/Experiencie/Experiencie';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <div className={styled.containerMain}>

      <NavBar />

      <Main />

      <Proyects />
      {/* <Experiencie /> */}
      <Contact />
      <div className={styled.hrs}>
        <hr />

      </div>
      <Footer />

    </div>



  )
}

export default App
