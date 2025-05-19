// components/ServicesSection.tsx
'use client';

import React from 'react';
import ServiceItem from './serviceItem';

const ServicesSection = () => {
  const services = [
    {
      title: 'Architecture',
      description:
        'We handle both the creative and technical sides. Our architects focus on layouts that are functional, aesthetic, and tailored to your needs, while our structural engineers ensure that every design is safe, durable, and compliant with building codes. From early concepts to construction-ready drawings, we deliver integrated solutions that are buildable, efficient, and cost-conscious. With cutting-edge 3D visualization, we bring your vision to life before construction begins. This allows you to fully experience the space, providing clarity and confidence throughout the design process.',
    },
    {
      title: 'Construction',
      description:
        'We build what we design. With experienced crews and solid project management, we deliver quality construction , on time, and on budget.',
    },
    {
      title: 'Project Management',
      description:
        'We stay hands-on from start to finish. We coordinate teams, track timelines, and keep you updated every step of the way, so you always know what’s happening on your project.',
    },
    {
      title: 'Renovations',
      description:
        'Upgrading an old space? We handle everything from design changes to full makeovers , whether it’s residential or commercial, we make it smooth and stress-free.',
    }
  ];

  return (
    <main>
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>
      <section className="services">
      <div className="grid grid-cols-2 gap-10">
        {services.map((service, idx) => (
          <ServiceItem
            key={idx}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
    </main>

  );
};

export default ServicesSection;
