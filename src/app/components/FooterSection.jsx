import React from 'react'

export default function FooterSection() {
  return (
    <div>
      <footer id='footer'>
        <nav>
            <div className='footer-nav-links'>
                <a href="#profile">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
        <p className="footer-text ">© {new Date().getFullYear()} Vinay Bolloju | All Rights Reserved</p>
        <br/>
      </footer>
    </div>
  )
}
