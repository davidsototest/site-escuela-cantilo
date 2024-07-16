
import './App.css';
import Header from './components/header/Header';
import Indicators from './components/indicadores/Indicators';
import About from './components/AboutUs/About';
import BigCard from './components/bigCard/BigCard';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import Author from './components/creator/Authot';
import Opinions from './opinions/Opinions';
import BigCard2 from './components/bigCard/BigCard2';
import CarouselTwo from './components/carusel/CarouselTwo';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className='header'>
          <Header/>
        </div>
        
        <CarouselTwo />
        
        <div id="aboutUs"></div>

        <div style={{maxWidth: '1300px', margin: 'auto'}}>
          <About/>
        </div>

        <div id="indicator"></div>

        <div className='indicators'>
          <div style={{maxWidth: '1300px'}}>
            <Indicators/>
          </div>
        </div>

        <div id="bigCard"></div>

        <div style={{maxWidth: '1300px', margin: 'auto'}}>
          <BigCard/>
        </div>
        
        <div className='bigcard2'>
          <BigCard2/>
        </div>

        <div id="opinions"></div>

        <div style={{maxWidth: '1300px', margin: 'auto' }}>
          <Opinions />
        </div>

        <div id="footer"></div>
        
        <div className='footer-fondo'>
          <div style={{maxWidth: '1300px', margin: 'auto', marginTop: "30px"}}>
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
