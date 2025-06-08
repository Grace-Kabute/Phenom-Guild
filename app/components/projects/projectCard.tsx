import React from 'react'
import Image from 'next/image';
import './projects.css'



const ProjectCard = ({ src, title, subtitle }: { src: string, title: string, subtitle: string }) => (
<div className="project group flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer">
  <div className="relative">
    <Image
      src={src}
      alt={title}
      width={400}
      height={400}
      className="h-60 w-full object-cover transition duration-300 group-hover:brightness-75"
    />
  </div>
  <div className="p-20 flex flex-col flex-grow bg-white ">
    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
</div>


  )
  
export default ProjectCard