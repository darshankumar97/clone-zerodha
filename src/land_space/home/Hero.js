import React from 'react';

function Hero () {
    return ( 
       

        <div className="container p-5 mb-5" >
         <h1 >hero   </h1>
        <div className="row text-center" >
        <img src="media/homeHero.png" alt="hero" className="mb-5"/>
        <h1 className="mt-5">Invest  in Everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-3 btn btn-primary' style={{width:"20%",margin:"0 auto"}}>SignUp for free</button>
         </div> </div>

     );
}

export default Hero;
