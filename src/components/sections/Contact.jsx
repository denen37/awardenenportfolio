import React, {useEffect} from 'react';
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineEnvironment} from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className='bg-surface' data-aos="fade-up">
        <div className='flex flex-col items-center gap-4'>
        <h1 className='text-xl'>Contact <span className='text-accent'>Me.</span></h1>
        <p className='text-xs text-text-secondary max-w-[900px] text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Excepturi tempora, libero hic laudantium nam dolorem aspernatur quaerat, 
        </p>
      </div>
      <div className='mx-auto w-[90%] px-5 py-5 sm:px-10 sm:py-10 mt-5 rounded-lg bg-card'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
                <p className='text-sm'>Have a project Idea?</p>
                <p className='text-sm text-accent'>Let's Discuss</p>

                <div className='flex flex-col gap-2 mt-5 text-text-muted'>
                    <div className='flex flex-wrap items-center gap-2'>
                        <div>
                            <AiOutlineMail className='size-4'/>
                        </div>
                        <p className='text-xs'>awardenen@gmail.com</p>
                    </div>

                    <div className='flex flex-wrap items-center gap-2'>
                        <div>
                            <AiOutlineWhatsApp className='size-4'/>
                        </div>
                        <p className='text-xs'>+44 7867060811</p>
                    </div>

                    <div className='flex flex-wrap items-center gap-2'>
                        <div>
                            <AiOutlineEnvironment className='size-4'/>
                        </div>
                        <p className='text-xs'>Edinburgh, Scotland</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
            <div className="flex flex-col gap-1">
                    <label
                        htmlFor="fullName"
                        className="text-xs font-medium text-text-primary"
                    >
                        Full Name
                    </label>

                    <input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-surface bg-background px-3 py-2 text-sm text-text-primary outline-none transition-all duration-300 placeholder:text-text-secondary focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder:text-text-muted"/>
                </div>

            <div className="flex flex-col gap-1">
                    <label
                        htmlFor="email"
                        className="text-xs font-medium text-text-primary"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        className="w-full rounded-lg border border-surface bg-background px-3 py-2 text-sm text-text-primary outline-none transition-all duration-300 placeholder:text-text-secondary focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder:text-text-muted"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="message"
                        className="text-xs font-medium text-text-primary"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        placeholder="Message..."
                        className="w-full rounded-lg border border-surface bg-background px-3 py-2 text-sm text-text-primary outline-none transition-all duration-300 placeholder:text-text-secondary focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder:text-text-muted"
                        rows={5}
                        />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
