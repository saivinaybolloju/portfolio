"use client"
import React from 'react'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <div>
      <section id='contact'>
        <p className="section__text__p1">Get in Touch</p>
        <h1 className='title'>Contact Me</h1>

        <div className="contact-info-container">
            <div className="contact-info-item">
                <Image src="/assests/email1.png" alt="Email" width={28} height={28} />
                <p><a href="mailto:bollojulucky11@gmail.com">saivinay.bolloju@gmail.com</a></p>
            </div>

            <div className='contact-info-item'>
                <Image src="/assests/linkedin2.png" alt="LinkedIn" width={28} height={28} />
                <p><a href="https://www.linkedin.com/in/vinay-bolloju-9b7680278/"  target="_blank">Linkedin</a></p>
            </div>
        </div>
      </section>
    </div>
  )
}
