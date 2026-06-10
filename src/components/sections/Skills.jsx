import React from 'react';
import { skills } from '../../data/skills';

const Skills = () => {
const ratingToWidth = (rating) => Math.floor((rating * 100) / 5);

  return (
    <section id="skills" className='max-w-[900px]'>
      <div>
        <h1 className='text-xl text-accent'>Skills</h1>
        <p className='text-xs text-text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nobis ullam adipisci doloremque inventore ab, velit a mollitia ipsam officiis! Pariatur in aut a vero qui facere! Officia, provident veniam?</p>
      </div>
      <div>
      <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-center">
        {skills.map((skill, index) => (
            <React.Fragment key={index}>
            <p className="text-sm">{skill.name}</p>

            <div className="relative h-2 bg-surface rounded-full overflow-hidden">
                <div
                className="absolute top-0 left-0 bottom-0 bg-accent rounded-full"
                style={{ width: `${ratingToWidth(skill.rating)}%` }}
                />
            </div>
            </React.Fragment>
        ))}
</div>
      </div>
    </section>
  );
};

export default Skills;