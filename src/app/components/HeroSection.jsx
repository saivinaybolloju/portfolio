"use client"
import React from 'react'
import Image from "next/image";
export default function HeroSection() {
  return (
    <section id='profile' className='hero-section'>
        <div className='section__pic-container'>
            <Image src="/assests/profilephoto.png" alt='Vinay Bolloju Profile' width={350} height={350} priority></Image>
        </div>

        <div className="section__text">

            <p className='section__text__p1'>Hello I'm</p>
            <h1 className='title'>Vinay Bolloju</h1>
            <h1 className='section__text__p2'>Aspiring SDE</h1>
        
            <div className='btn-container'>
                <button className='btn btn-color-2'>
                    <a href="/assests/resume.pdf" download>
                        Resume
                    </a>
                </button>

                <button className='btn btn-color-2' href="#contact"> Get in Touch</button>
            </div>

            <div id='socials-container'>
                <Image src="/assests/linkedin1.png" alt='LinkedIn Logo' className='icon' width={35} height={35} onClick={()=>{window.open("https://www.linkedin.com/in/vinay-bolloju-9b7680278/")}}></Image>
                <Image src="/assests/leetcode1.png" alt='Leetcode Logo' className='icon' width={35} height={35} onClick={()=>{window.open("https://leetcode.com/u/bollojuvinay/")}}></Image>
                <Image src="/assests/github1.png" alt='GitHub Logo' className='icon' width={35} height={35} onClick={()=>{window.open("https://github.com/saivinaybolloju")}}></Image>
            </div>

        </div>
    </section>
  )
}
