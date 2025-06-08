'use client';

import React from 'react';
import ProjectCard from './projectCard';
import ButtonLink from '../button';
import './projects.css';
import { projectsData } from '../../data'; // adjust path if needed

const Projects = () => {
  return (
    <section className="projects px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map(project => (
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
