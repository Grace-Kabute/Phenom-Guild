'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import Navbar from '../navbar/navbar';
import { projectsData } from '../../data'; // adjust the path if needed
import './projects.css';

const ProjectPage = () => {
  const params = useParams();
  const { id } = params as { id: string };

  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  const { title, description, image, client, year, location, totalArea, material } = project;

  return (
    <main className="p-6 projectWrapper">
      <Navbar />
      <div className="centred">
        <div>
          <Link href="/hero">home /</Link>
          <Link href="/projects">projects /</Link>
          <span>{title}</span>
        </div>

        <div className="projectContainer">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="h-60 object-cover"
          />
          <div className="space">
            <h1>{title}</h1>
            <p className="text">{description}</p>
            <div className="flex">
              <span><strong>Client:</strong> {client}</span>
              <span><strong>Location:</strong> {location}</span>
              <span><strong>Year:</strong> {year}</span>
              <span><strong>Area:</strong> {totalArea}</span>
              <span><strong>Material:</strong> {material}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
