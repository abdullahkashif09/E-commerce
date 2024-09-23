import React from 'react'
import './Offers.css'
import exclusiv_image from '../Assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
          <h1>Exclusive</h1>
          <h1>Offer For You</h1>
          <p>Only On best seller Product</p>
          <button>Check Now</button>

      </div>
      <div className='offers-right'>
        <img src={exclusiv_image} alt="" />

      </div>
      


    </div>
  )
}

export default Offers