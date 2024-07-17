
import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import WhatsAppButton from '../components/botonFlotante/WhatsAppButton';

interface Props {
    // Define props here
}

const HomePage: React.FC<Props> = (Props) => {
    return (
        <>
            <HomeLayout/>
            <WhatsAppButton phoneNumber="+5493413424451" message="Hola! Quisiera más información." />
        </>
    );
};

export default HomePage;