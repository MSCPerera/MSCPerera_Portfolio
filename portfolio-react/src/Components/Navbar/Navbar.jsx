import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt="Logo" className='logo' />
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nac-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar