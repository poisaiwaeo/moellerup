import React from 'react';
/*Components */
import Header from './components/header/Header'
import Navbar from './components/header/Navbar'
import Intro from './components/intro/Intro'
import Nyheder from './components/nyheder/Nyheder'
import Aktiviteter from './components/aktiviteter/Aktiviteter'
import Outtro from './components/outtro/Outtro'
import Footer from './components/footer/Footer'
/*Css*/
import './App.css'


function App() {
  return (
    <div className="app bg-light">
      <main className="main__wrapper">

        <Header/>
        <Intro/>
        <Nyheder/>
        <hr className="bg-dark"/>
        <Aktiviteter/>
        <Outtro/>

      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
