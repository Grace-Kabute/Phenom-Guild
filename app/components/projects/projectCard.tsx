import React from 'react'
import Image from 'next/image';
import './projects.css'
import ButtonLink from '../button';



const ProjectCard = ({ src, title, subtitle }: { src: string, title: string, subtitle: string }) => (
<div className="project group flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer">
  <ButtonLink href="/mansion">
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={src}
      alt={title}
      width={500}
      height={500}
      className="h-60 w-full object-cover transition duration-300 group-hover:brightness-75"
    />
  </div>
  </ButtonLink>


  <div className="p-20 flex flex-col flex-grow bg-white ">
    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
</div>


  )
  
export default ProjectCard