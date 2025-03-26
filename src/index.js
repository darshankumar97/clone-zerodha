import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter, Routes,Route } from "react-router-dom";
import './index.css';
import homepage from './land_space/home/homepage';
import signup from './land_space/signup/signup';
import about from './land_space/about/aboutpage';
import product from './land_space/product/productpage';
import pricing from './land_space/pricing/pricingpage';
import support from './land_space/support/supportpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<homepage />}/>
      <Route path="/signup" element={<signup />}/>
      <Route path="/about" element={<aboutpage />}/>
      <Route path="/product" element={<productpage />}/>
      <Route path="/pricing" element={<pricingpage />}/>
      <Route path="/support" element={<supportpage />}/>
      </Routes>
  </BrowserRouter>
  
);


