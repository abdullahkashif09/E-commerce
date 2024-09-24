import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>signup</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='text' placeholder='Email Addres'/>
          <input type='text' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'> Already have an account <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>by Continuing i agree to the term of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup