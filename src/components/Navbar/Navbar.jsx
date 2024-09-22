import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Shopper Logo' />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li className={activeMenu === 'shop' ? 'active' : ''} onClick={() => setActiveMenu('shop')}>
          <Link to='/'>Shop</Link>
        </li>
        <li className={activeMenu === 'mens' ? 'active' : ''} onClick={() => setActiveMenu('mens')}>
          <Link to='/mens'>Mens</Link>
        </li>
        <li className={activeMenu === 'womens' ? 'active' : ''} onClick={() => setActiveMenu('womens')}>
          <Link to='/womens'>Womens</Link>
        </li>
        <li className={activeMenu === 'kids' ? 'active' : ''} onClick={() => setActiveMenu('kids')}>
          <Link to='/kids'>Kids</Link>
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Shopping Cart Icon" />
        </Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
}

export default Navbar;
