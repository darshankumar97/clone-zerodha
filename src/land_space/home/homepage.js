import React from 'react';
import Hero from './Hero';
import Awards from './awards';
import Stats from './stats';
import Education from './education';
import Pricing from './pricing';
import OpenAccount from '../openAccount';

function Homepage () {
    return ( 
        <>
            
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
                </>
     );
}

export default Homepage;
