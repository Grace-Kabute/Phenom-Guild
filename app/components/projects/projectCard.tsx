import React from 'react'
import Image from 'next/image';
import './projects.css'



const ProjectCard = ({ src, title, subtitle }: { src: string, title: string, subtitle: string }) => (
<div className="project group flex flex-col h-full rounded-2xl overflow-hidden shadow-md">
  <div className="relative">
    <Image
      src={src}
      alt={title}
      width={400}
      height={400}
      className="h-60 w-full object-cover transition duration-300 group-hover:brightness-75"
    />
    <div className="absolute inset-0 flex items-center justify-center transition duration-300 group-hover:bg-black group-hover:bg-opacity-50">
      <h4 className="text-white text-xl font-bold text-center z-10">{title}</h4>
    </div>
  </div>

  <div className="p-4 flex flex-col flex-grow bg-white">
    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
</div>


  )
  
export default ProjectCard