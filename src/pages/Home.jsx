import React, { useState, useEffect } from 'react';
import '../style/home.css'
import Navbar from '../components/Home/Navbar';
import FirstSection from '../components/Home/FirstSection';
import ThreeSection from '../components/Home/ThreeSection';
import FourSection from '../components/Home/FourSection';
import FiveSection from '../components/Home/FiveSection';
import SixSection from '../components/Home/sixSection';
import SevenSection from '../components/Home/sevenSection';
import NineSection from '../components/Home/NineSection';
import ElevenSection from '../components/Home/ElevenSection';
import Footer from '../components/Home/Footer';

const Home = () => {
  return (
       <>
        <Navbar/>
        <FirstSection/> 
        <div className='second-section'>
            <div className='second-section-card'>
                <div className='second-section-card-left'>
                    <img className='second-section-img' alt="" />
                </div>
                <div className='second-section-card-right'>
                    <h1>ODONTOLOGÍA GENERAL</h1>
                    <p>Nos encargamos del diagnóstico y corrección de la mal posición de los dientes.</p>
                </div>
            </div>
            <div className='second-section-card'>
                <div className='second-section-card-left'>
                    <img className='second-section-img-two' alt="" />
                </div>
                <div className='second-section-card-right'>
                    <h1>ODONTOLOGÍA INFANTIL</h1>
                    <p>Tomamos las medidas oportunas y necesarias anticipándonos a problemas bucodentales que puedan surgir.</p>
                </div>
            </div>
            <div className='second-section-card'>
                <div className='second-section-card-left'>
                    <img className='second-section-img-three' alt="" />
                </div>
                <div className='second-section-card-right'>
                    <h1>BLANQUEAMIENTO</h1>
                    <p>Es un procedimiento que consiste en aplicar una solución especial para el caso sobre la superficie de los dientes.</p>
                </div>
            </div>
        </div>

        <ThreeSection/>
        <FourSection/>
        <FiveSection/>
        <SixSection/>
        <SevenSection/>
        <NineSection/>
        <ElevenSection/>
        <Footer/>
    </>
  );
}

export default Home;