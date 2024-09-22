import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
 const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
         <h2>New Arrival only</h2>
         <div>
            <div className="hand-hand-icon">
               <p>new</p>
             
              
            </div>
            <p>collection</p>
            <p>For everyone</p>
         </div>
         <div className='hero-latest-btn'>
            <div>latest collection</div>
            <img src={arrow_icon} alt="" />

         </div>
       </div>
       <div className="hero-right">
          <img src={hero_image} alt="" />
       </div>
        

    </div>
  )
}
export default Hero