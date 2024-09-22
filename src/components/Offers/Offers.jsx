import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'; // Ensure correct path
import Popular from './components/Popular/Popular';
import Shop from './pages/Shop'; // Updated shop to Shop
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Popular/>
        
        <Routes>
          <Route path='/shop' element={<Shop />} /> 
          <Route path='/mens' element={<ShopCategory category='mens' />} />
          <Route path='/womens' element={<ShopCategory category='womens' />} />
          <Route path='/kids' element={<ShopCategory category='kids' />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
