import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import Aisles from './pages/Aisles'
import MainCard from './components/MainCard'
import About from './pages/About';
import Support from './pages/Support'
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import FruitsAndVegetables from './pages/FruitsAndVegetables';
import Bakery from './pages/Bakery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainCard>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aisles" element={<Aisles />} />
        <Route path="/aisles/fruitsandvegetables" element={<FruitsAndVegetables />} />
        <Route path="/aisles/bakery" element={<Bakery />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/support" element={<Support />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </MainCard>
  </BrowserRouter>
);
