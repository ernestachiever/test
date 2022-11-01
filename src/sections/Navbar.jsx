import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <a href="index.html"><h3>Logo</h3></a>
        <ul className='nav__menu'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar