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
                <button className='btn btn-color-2' onClick={()=>{}}>  Resume</button>
                <button className='btn btn-color-2' onClick={()=>{}}> Get in Touch</button>
            </div>

            <div id='socials-container'>
                <Image src="/assests/linkedin1.png" alt='LinkedIn Logo' className='icon' width={35} height={35} onClick={()=>{}}></Image>
                <Image src="/assests/leetcode1.png" alt='Leetcode Logo' className='icon' width={35} height={35} onClick={()=>{}}></Image>
                <Image src="/assests/github1.png" alt='GitHub Logo' className='icon' width={35} height={35} onClick={()=>{}}></Image>
            </div>

        </div>
    </section>
  )
}
