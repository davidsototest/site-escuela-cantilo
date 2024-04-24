import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carusel from './components/carusel/Carusel';
import Header from './components/header/Header';
import Indicators from './components/indicadores/Indicators';
import About from './components/AboutUs/About';
import BigCard from './components/bigCard/BigCard';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import Author from './components/creator/Authot';
import Opinions from './opinions/Opinions';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div style={{maxWidth: '1300px', background: '#fff'}}>
          <Header/>
        </div>

        <Carusel/>

        <div style={{maxWidth: '1300px', margin: 'auto', marginTop: '70px'}}>
          <About/>
        </div>

        <div className='indicators'>
          <div style={{maxWidth: '1300px'}}>
            <Indicators/>
          </div>
        </div>

        <div style={{maxWidth: '1300px', margin: 'auto', marginTop: '70px'}}>
          <BigCard/>
        </div>

        <div style={{maxWidth: '1300px', margin: 'auto', marginTop: '70px'}}>
          <Opinions />
        </div>
        
        <div className='footer-fondo'>
          <div style={{maxWidth: '1300px', margin: 'auto', marginTop: '30px'}}>
            <Footer/>
          </div>
          <div className='derechos-reservados'>
            <Author/>
          </div>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
