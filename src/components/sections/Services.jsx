import React from 'react';
import { services } from '../../data/services';


const Services = () => {
  return (
    <section id="services">
        <div className='flex flex-col items-center gap-1'>
            <p className='text-xs  text-text-secondary'>SERVICES</p>
            <h1 className='text-xl'>What <span className='text-accent'>I do.</span></h1>
        </div>
        <div className='mt-4 flex flex-wrap justify-center gap-5'>
        {
            services.map((service, index) => (
                <div key={index} className="relative max-w-60  rounded-lg bg-card px-4 py-4 flex flex-col items-center gap-4 overflow-hidden">

            {/* Radial glow */}
            <div
                className="
                    absolute
                    top-10
                    left-1/2
                    -translate-x-1/2
                    h-40
                    w-40
                    rounded-full
                    bg-[radial-gradient(circle,rgba(20,184,166,0.35)_0%,rgba(20,184,166,0.15)_40%,transparent_75%)]
                "
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4">
                <h1 className="text-text-primary uppercase">
                    {service.name}
                </h1>

                <img
                    src={service.image}
                    alt="Web dev illustration"
                    className="w-20"
                />

                <p className="text-xs text-text-secondary mt-4 text-center">
                    {service.description}
                </p>
            </div>
            </div>
            ))}
        </div>
    </section>
  );
};

export default Services;
