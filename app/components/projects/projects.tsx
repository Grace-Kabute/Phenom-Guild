'use client';

import React from 'react';
import ProjectCard from './projectCard';
import ButtonLink from '../button';
import './projects.css';
import { projectsData } from '../../data'; // adjust path if needed

const Projects = () => {
  return (
    <section className="projects max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-8">
        {projectsData.slice(0, 3).map(project => (
          <ProjectCard
            key={project.id}
            src={project.image}
            title={project.title}
            subtitle={`${project.location} • ${project.totalArea}`}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink href="/gallery" className='btn'>Explore</ButtonLink>
      </div>
    </section>
  );
};

export default Projects;
