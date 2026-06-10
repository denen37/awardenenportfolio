import React from 'react'
import { images } from '../../assets/images'

const About = () => {
    return (
        <section id='about'>
            <div className='flex flex-col items-center gap-1'>
                <p className='text-xs  text-text-secondary'>MY BIO</p>
                <h1 className='text-xl'>About <span className='text-accent'>Me</span></h1>
            </div>
            <div className='flex items-center gap-5 mt-10'>
               <div className='hidden md:flex flex-2 items-center justify-center'>
                <div className='w-60 h-60 rounded-full border-2 border-accent overflow-hidden'>
                    <img src={images.portrait} alt="Portrait" className='h-full w-full object-cover'/>
                </div>
               </div>
                <div className='flex-3'>
                    <p className='text-text-secondary'>
                        Hi, I'm Abraham Awar, a Software Developer and Robotics Engineer passionate about building intelligent systems that solve real-world problems. With a background in Mechanical Engineering and professional experience in backend software development, I specialize in designing scalable applications, APIs, and automation solutions. 
                    </p>
                    <p className='mt-4'>
                    Currently pursuing an MSc in Robotics at Heriot-Watt University, I am expanding my expertise in robotics, artificial intelligence, and machine learning. My goal is to bridge the gap between software and physical systems, creating innovative technologies that improve productivity, security, and quality of life.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;