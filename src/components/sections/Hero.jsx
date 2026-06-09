import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillMail, AiOutlineX} from "react-icons/ai";
import { images } from '../../assets/images';

const Hero = () => {
  return (
    <section className='bg-surface min-h-[calc(100vh-var(--navbar-height))] flex flex-col-reverse sm:flex-row items-center justify-between'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          <h2 className='text-lg font-semibold mb-4'>
            <span>Hello, </span>
            <span className='text-accent'>I'm</span>
            </h2>
          <h1 className='text-xl font-semibold text-accent'>ABRAHAM DENEN AWAR</h1>
          <h3 className='text-base'>Software and Robotics Engineer</h3>
          <p className='text-xs text-text-secondary mt-4'>
            I build scalable backend systems, intelligent software, and automation solutions.<br/> 
            Currently pursuing an MSc in Robotics while exploring AI, 
            machine learning, and autonomous systems.
          </p>
          <div className='mt-10 mb-2'>
            <a className='px-4 py-2 rounded-sm bg-accent text-background cursor-pointer hover:bg-accent-light active:scale-90 transition-all duration-300 ease-in-out'>Let's Chat</a>
          </div>
        </div>
        <div className='flex items-center gap-2 mt-20'>
          <p className='text-xs text-text-secondary'>Follow me on :</p>
          <div className='flex items-center justify-center gap-2'>
            <AiFillGithub className='size-3'/>
            <AiFillLinkedin className='size-3'/>
            <AiFillFacebook className='size-3'/>
            <AiFillMail className='size-3'/>
            <AiOutlineX className='size-3'/>
          </div>
        </div>
      </div>
      <div>
      <div className="relative h-[200px] w-[150px] md:h-[400px] md:w-[300px] overflow-hidden rounded-xl mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.profile})` }}
        />

        {/* Dark/light fade from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-transparent to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent" />
      </div>
      </div>
    </section>
  );
};

export default Hero;