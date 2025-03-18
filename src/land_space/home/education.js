import React from 'react';
function Education () {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/education.svg"></img>
                </div>
                <div className='col-6 '>
                    <h1 className='p-2 mt-5'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                    <a href =''>Exlore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
                   <p className='mt-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries. </p>
                   <a href =''>Exlore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
                </div>
            </div>
        </div>
     );
}

export default Education;
