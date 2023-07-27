import React, { useState } from 'react';
import './navbar.scss';

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    const menuLinks = document.querySelector('.links');

    if(activeMenu) {
      menuLinks?.classList.add('leaving');
      setTimeout(()=>{
        setActiveMenu(false)
        menuLinks?.classList.remove('leaving');
      }, 400);
    } else {
      setActiveMenu(true);
    }
  }

  return (
    <div className='navbar-main_container'>
      <div className="navbar-links_container">
        <ul className={`links ${activeMenu ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">More</a></li>
        <li><a href="#">About</a></li>
        </ul>
      </div>
      <div className="responsive-navbar_links-container">
        <button id='menu' onClick={toggleMenu}>Menu</button>
      </div>
    </div>
  )
}

export default Navbar;