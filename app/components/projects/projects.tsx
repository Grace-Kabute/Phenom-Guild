'use client';

import React from 'react';
import ProjectCard from './projectCard'
import './projects.css'


const Projects = () => {
  return (
    <section className="projects px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Notable Projects</h2>

      <div className="grid grid-cols-3 sm-grid-cols-2 md-grid-cols-3 gap-8">
        <ProjectCard src="/phenom-002.jpg" title="Flat-roof 4-bedroom" subtitle="Residential building" />
        <ProjectCard src="/project-1.jpg" title="Another Design" subtitle="Commercial project" />
        <ProjectCard src="/project-2.jpg" title="Another Design" subtitle="Commercial project" />
    </div>

      <div className="mt-10 text-center">
        <button className="px-6 py-3 text-white rounded-full hover:bg-[#0c3e49] transition-all">
          See more projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
