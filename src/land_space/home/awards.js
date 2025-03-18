import React from 'react';
function Awards () {
    return ( 
        // <h1>Awards <i class="fa-solid fa-address-card"></i></h1>
        
        <div className ='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/largestBroker.svg'></img></div>
                <div className='col-6'>
                    <h1>Largest badmash in india</h1>
                    <p className='mb-5'>2+ million useres get fooled by this and ur also welcome</p>
                   <div className='row'>
                    <div className='col-6 p-3'>
                    <ul>
                        <li>
                            <p>Future and Option</p>
                        </li>
                        <li>
                            <p>Invest and BurnOut</p>
                        </li>
                        <li>
                            <p>Save money and Go Eat BIRIYANY</p>
                        </li>
                    </ul>
                    </div>
                    <div className='col-6 p-3'>
                    <ul>
                        <li>
                            <p>Make fun </p>
                        </li>
                        <li>
                            <p>Mayavi minugo neenu</p>
                        </li>
                        <li>
                            <p>i know very well that i no nothing</p>
                        </li>
                    </ul>
                    </div>
                   </div>
                   <img src = 'media/pressLogos.png' style={{width:'90%'}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;
