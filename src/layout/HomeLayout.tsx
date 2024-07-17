
import React from 'react';
import Header from '../components/header/Header';
import CarouselTwo from '../components/carusel/CarouselTwo';
import About from '../components/AboutUs/About';
import Indicators from '../components/indicadores/Indicators';
import BigCard from '../components/bigCard/BigCard';
import BigCard2 from '../components/bigCard/BigCard2';
import Opinions from '../components/opinions/Opinions';
import Footer from '../components/footer/Footer';
import Author from '../components/creator/Authot';

interface Props {
    // Define props here
}

const HomeLayout: React.FC<Props> = (Props) => {
    return (
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
    );
};

export default HomeLayout;