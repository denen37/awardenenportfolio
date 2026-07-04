import React from 'react';
import {ExternalLink} from 'lucide-react'
import { certificates } from '@/data/certificate';
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 className='text-xl text-accent'>Certificates</h2>
      <div className='mt-2 flex flex-col gap-6'>
        {
          certificates.map((item, index) => (
            <div className='flex flex-wrap gap-4' key={index}>
            <div className='w-36 rounded-lg overflow-hidden'>
              <img src={item.image} alt={`${item.title.toLocaleLowerCase()} cert`.split(' ').join('_')} className='w-full object-cover object-center'/>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-text-primary  text-md'>{item.title}</h1>
              <p className='text-text-secondary text-sm'>{item.issuer} | {`${months[new Date(item.date).getMonth()]} ${new Date(item.date).getFullYear()}`}</p>
              <a href={item.link} target='_blank' className='flex items-center gap-1 text-xs text-accent'>Verify <ExternalLink className='text-xs' size={12}/></a>
            </div>
        </div>
          ))
        }
      </div>
    </section>
  );
};

export default Certificates;