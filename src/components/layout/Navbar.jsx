import React, {useState} from 'react';
import { images } from '../../assets/images';
import { HiArrowUpRight, HiBars3 } from "react-icons/hi2";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navItems =  [{
      name: 'Home',
      href: '#',
    },{
      name: 'Services',
      href: '#services',
    },{
      name: 'Projects',
      href: '#projects',
    },{
      name: 'About',
      href: '#about',
    },{
      name: 'Contact',
      href: '#contact',
    }]
  return (
    <nav className='sticky top-0 z-50 bg-background'>
      <div className='flex items-center justify-between px-10 h-[var(--navbar-height)]'>
      <a href='#' className='flex items-center gap-2'>
      <img src={images.logo} alt="logo" className='w-14 h-14 object-contain rounded-full'/>
      <p className='font-semibold text-sm hidden md:block text-nowrap'>
        <span className='text-brand-primary'>ABRAHAM </span> 
        <span className='text-brand-secondary'>AWAR</span>
        </p>
      </a>
      <div className='hidden sm:flex items-center gap-5 text-text-primary text-sm'>
        {
            navItems.map((item, index) => (
                <a href={item.href} className='group cursor-pointer active:text-accent-light active:scale-90 transition-all duration-300' key={index}>
                <span className='block p-0.5 transition-colors duration-300 group-hover:text-accent'>{item.name}</span>
                <span className="block h-0.5 w-0 mt-1 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            ))
        }
        <span className='ml-6'>
            <a href='./resume.pdf' target='_blank' className='px-4 py-2 text-background bg-accent rounded-sm flex items-center gap-1 hover:bg-accent-light transition-all duration-300'>
                <span>Resume</span>
                <HiArrowUpRight className=''/>
            </a>
        </span>
      </div>
      <button 
        className='cursor-pointer sm:hidden hover:text-accent active:scale-90 transition-all duration-300'
        onClick={() => setOpen(!open)}
        >
        <HiBars3 className='size-6'/>
      </button>
      </div>
      {/**Mobile Navbar */}
      <div className={`
    overflow-hidden bg-surface transition-all duration-300 ease-in-out
    ${open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
      <div className='py-2 flex flex-col items-center gap-5 text-text-primary text-sm bg-surface'>
        {
           
           navItems.map((item, index) => (
                <a href={item.href} className='group cursor-pointer active:text-accent-light active:scale-90 transition-all duration-300' key={index}>
                <span className='block p-0.5 transition-colors duration-300 group-hover:text-accent'>{item.name}</span>
                <span className="block h-0.5 w-0 mt-1 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            ))
        }
        <span className='ml-6'>
            <a href='./resume.pdf' target='_blank' className='px-4 py-2 text-background bg-accent rounded-sm flex items-center gap-1 hover:bg-accent-light transition-all duration-300'>
                <span>Resume</span>
                <HiArrowUpRight className=''/>
            </a>
        </span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;