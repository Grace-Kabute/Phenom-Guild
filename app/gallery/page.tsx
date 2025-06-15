import React from 'react'
import ProjectCard from '../components/projects/projectCard';
import { projectsData } from '../data';


const Gallery = () => {
  return (
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <ProjectCard
            key={project.id}
            src={project.image}
            title={project.title}
            subtitle={`${project.location} • ${project.totalArea}`}
          />
        ))}
      </div>  )
}

export default Gallery