"use client"
import Image from 'next/image'
import React from 'react'


export default function ProjectsSection() {
  return (
    <div>
      <section id='projects'>
        <p className='section__text__p1'>Browse My Recent</p>
        <h1 className="title">Projects</h1>

        <div className="experience-details-container">
            <div className="about-containers">
                {/*Project 1*/}
                <div className="details-container color-container">
                    <div className="article-container">
                        <Image src="" alt="Wandervault pic" width={30} height={20} className='project-img'></Image>
                    </div>
                    <h2 className="experience-sub-title project-title">WanderVault</h2>
                    <div className="button">
                        <button className='btn btn-color-2 project-btn' onClick={()=>{window.open("https://github.com/saivinaybolloju/WanderVault")}}>
                            Source Code
                        </button>
                        <button className='btn btn-color-2 project-btn' onClick={()=>{window.open("")}}>
                            APK Download
                        </button>
                    </div>
                </div>


                {/*Project 2*/}
                <div className="details-container color-container">
                    <div className="article-container">
                        <Image src="" alt="WA pic" width={30} height={20} className='project-img'></Image>
                    </div>
                    <h2 className="experience-sub-title project-title">Whatsapp Automation</h2>
                    <div className="button">
                        <button className='btn btn-color-2 project-btn' onClick={()=>{window.open("https://github.com/saivinaybolloju/whatsappautomation")}}>
                            Source Code
                        </button>
                        <button className='btn btn-color-2 project-btn' onClick={()=>{window.open("")}}>
                            ZIP Download
                        </button>
                    </div>
                </div>




            </div>
        </div>
      </section>
      <h3><center>Stay Tuned Coming in...</center></h3>
      <br /><br /><br />
    </div>
  )
}
