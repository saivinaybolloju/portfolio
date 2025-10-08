"use client"
import React from 'react'
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
        <section id='about' className='py-20 px-6 md:px-20 bg-white text-center'>
            <p className='text-gray-500 font-medium text-lg'>Get to Know More</p>
            <h1 className='text-4xl font-bold mb-10'>About me</h1>

            <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
                <div className='flex flex-row sm:flex-row gap-6 justify-center'>
                    <div className='border border-gray-300 rounded-2xl '>
                        <Image src="/assests/experience1.png" alt="Experience icon" width={50} height={40} className="mb-3"></Image>
                        <h3 className='text-xl font-semibold'>Experience</h3>
                        <p className='text-gray-600'>Frontend Development</p>
                    </div>
                    <div className='border border-gray-300 rounded-2xl'>
                        <Image src="/assests/education1.png" alt="Education icon" width={50} height={50} className="mb-3"></Image>
                        <h3 className='text-xl font-semibold'>Education</h3>
                        <p className='text-gray-600'>Computer Science Engineering</p>
                    </div>
                    <br />
                    <br />
                    <p className='text-gray-700 leading-relaxed'>
                        I'm a passionate developer with a strong focus on creating user-friendly
            and efficient applications. My journey in tech revolves around learning,
            experimenting, and constantly improving my skills. I love exploring
            frontend technologies and turning creative ideas into working products.
                    </p>

                </div>

            </div>
        </section>
        


    </>
  )
}
