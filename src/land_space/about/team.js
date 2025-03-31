import React from 'react';
function Team () {
    return ( 
        <div className="container">
        <div className="row p-5 mt-5 border-top">
            <h1 className=" fs-3 text-center">People
            </h1>

        </div>

        <div className="row p-8  text-muted" >
           <div className="col-6">
            <img  className="p-0" src="/media/nithinKamath.jpg" style={{borderRadius:"100%", width:"50%"}}></img>
            <h4 className="mt-5 ">Nithin Kamath</h4>
            <h6>Founder & CEO</h6>
           </div>
           <div className="col-6 p-2">
            <p className="fs-5 ">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.<br></br><br></br>

He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br></br><br></br>

Playing basketball is his zen.<br></br><br></br>

Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /<a href="" style={{textDecoration:"none"}}>Twitter</a> </p>
           </div>
        </div>
    </div>
     );
}

export default Team;
