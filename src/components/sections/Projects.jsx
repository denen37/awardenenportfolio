import React, { useState } from 'react';
import Tab from '../common/Tab';
import { images } from '../../assets/images';
import { projects } from '../../data/projects';

const Projects = () => {
    const [activeTab, setActiveTab] = useState("");

    const filteredProjects = projects.filter((p) => !activeTab || p.category === activeTab)

  return (
    <section id="projects" className='bg-surface'>
      <div className='flex flex-col items-start gap-4'>
        <h1 className='text-xl'><span className='text-accent'>Projects</span> I have done.</h1>
        <p className='text-xs text-text-secondary max-w-[900px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Excepturi tempora, libero hic laudantium nam dolorem aspernatur quaerat, 
            facere maiores sed amet? 
            Ducimus a fugit doloremque ullam neque natus quasi hic.
        </p>
      </div>
      <Tab activeTab={activeTab} onSelect={setActiveTab}/>
    <div className='mt-5 flex flex-wrap gap-5 justify-start'>
        {
            filteredProjects.length > 0 ?
                filteredProjects
            .map((project, index) => (
              <div
                key={index}
                className="px-5 py-4 max-w-60 flex flex-col items-start gap-2 bg-card rounded-lg"
              >
                <div className="h-40 overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={`${project.name} pic`}
                  />
                </div>
        
                <h1 className="text-text-primary text-xl">
                  {project.name}
                </h1>
        
                <p className="text-xs text-text-secondary">
                  {project.description}
                </p>
              </div>
            ))
            : 
            (<div>
                <h1 className='text-text-muted italic text-base text-center'>No projects found.</h1>
            </div>)
        }
      </div>
    </section>
  );
};

export default Projects;
