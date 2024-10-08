import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/wits.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link}  from 'react-scroll'

const Navbar = () => {
    const[mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu=()=>{
        mobileMenu? setMobileMenu(false): setMobileMenu(true);

    }

  return (
    <nav className='container'>
      <img src= {logo} alt="" className='logo'/>
      <ul className= {mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to= 'hero' smooth={true} offset={0} duration= {500}>Home</Link></li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>About Us</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/> 

    </nav>
  )
}

export default Navbar
