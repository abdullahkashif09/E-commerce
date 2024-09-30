import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';
import NewCollection from './components/NewCollection/NewCollection';
import NewLetter from './components/NewLetter/NewLetter';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/LoginSignup';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewLetter/>
     
       
        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='mens' />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='womens' />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kids' />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;