import React, {useEffect, useState} from 'react';
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineEnvironment} from "react-icons/ai";
import emailjs from 'emailjs-com'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    .then((result) => {
        alert("Message Sent!");
        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }).catch((error) => {
        console.log(error);
        alert("Oops! Something went wrong. Try again later.");
    })
}

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
            <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="name"
                        className="text-xs font-medium text-text-primary"
                    >
                        Full Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
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
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
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
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        placeholder="Message..."
                        className="w-full rounded-lg border border-surface bg-background px-3 py-2 text-sm text-text-primary outline-none transition-all duration-300 placeholder:text-text-secondary focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder:text-text-muted"
                        rows={5}
                        />
                </div>

                <div className='mt-2 flex justify-center'>
                    <button type="submit" className='px-4 py-2 rounded-sm bg-accent text-background cursor-pointer hover:bg-accent-light active:scale-90 transition-all duration-300 ease-in-out'>Send Message</button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
