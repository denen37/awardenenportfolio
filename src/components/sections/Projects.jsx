import React, { useState, useEffect } from 'react';
import Tab from '../common/Tab';
import { images } from '../../assets/images';
import { projects } from '../../data/projects';
import Modal from '../common/Modal';


const Projects = () => {
  const [activeTab, setActiveTab] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => !activeTab || p.category === activeTab)

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
  
    return text.slice(0, maxLength).split(" ").slice(0, -1).join(" ");
  };

  return (
    <section id="projects" className='bg-surface' data-aos="fade-up">
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
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="h-40 overflow-hidden rounded-t-lg cursor-pointer">
                  <img
                    src={project.image}
                    alt={`${project.name} pic`}
                  />
                </div>
        
                <h1 className="text-text-primary text-xl">
                  {project.name}
                </h1>
        
                <p className="text-xs text-text-secondary">
                  {truncateText(project.description)}
                  <span className="text-accent"> ...</span>
                </p>
              </div>
            ))
            : 
            (<div>
                <h1 className='text-text-muted italic text-base text-center'>No projects found.</h1>
            </div>)
        }
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div>
            <div className="h-56 overflow-y-auto scrollbar-thin">
              <img
                src={selectedProject.image}
                alt={selectedProject.name + " pic"}
                className="w-full rounded-lg object-cover"
              />
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-text-primary">
              {selectedProject.name}
            </h2>

            <p className="mt-3 text-sm text-text-secondary">
              {selectedProject.description}
            </p>

            <div className="mt-4 flex gap-3">
              <a 
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-accent underline hover:text-accent-light transition-colors"
              >
                Github
              </a>

              <a 
              href={selectedProject.link}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-accent underline hover:text-accent-light transition-colors"
              >
                Live site
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
