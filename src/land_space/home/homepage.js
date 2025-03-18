import React from 'react';
import Hero from './Hero';
import Awards from './awards';
import Stats from './stats';
import Education from './education';
import Pricing from './pricing';
import OpenAccount from '../openAccount';
import Footer from '../footer';
import Navbar from '../navbar';

function Homepage () {
    return ( 
        <>
             <Navbar/>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
            <Footer/>        </>
     );
}

export default Homepage;
