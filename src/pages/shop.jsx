import React from 'react'
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';
import NewCollection from './components/NewCollection/NewCollection';
import NewLetter from './components/NewLetter/NewLetter';



const Shop = () => {
  return (
    <div className='hero'>
       <Hero />
        <Popular />
        <Offers />
        <NewCollection />
        <NewLetter />
        
        
    </div>
  )
}

export default Shop