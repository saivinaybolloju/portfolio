"use client"
import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className='logo'>Vinay Bolloju</div>
          <ul className='nav-links'>
            <li> <a href="#about">About</a></li> 
            <li> <a href="#experience">Experience</a></li> 
            <li> <a href="#projects">Projects</a></li> 
            <li> <a href="#contact">Contact</a></li> 
          </ul>
      </nav>

      {/* <nav className='hamburger-nav'>
        <div className='logo'>Vinay Bolloju</div>
        <div className='hamburger-menu'> */}
          {/* <div className={`menu-links${menuOpen?"open":""}`}> */}
          {/* <div>
            <li><a href="#about" onClick={()=>{}}>About</a></li>
            <li><a href="#experience" onClick={()=>{}}>Experience</a></li>
            <li><a href="#projects" onClick={()=>{}}>Projects</a></li>
            <li><a href="#contact" onClick={()=>{}}>Contact</a></li>
          </div>
        </div>
      </nav> */}

    </>
  )
}
