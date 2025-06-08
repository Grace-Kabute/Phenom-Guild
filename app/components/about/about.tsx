'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ServicesSection from './services';
import './about.css';

const AboutSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  // Observer for text reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // overlay fade effect
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const section = ref.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollRatio = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
      setOverlayOpacity(scrollRatio);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='about' ref={ref}>
      {/* HERO SECTION */}
      <section className="aboutUs-background">
        <div
          className="aboutUs-overlay"
          style={{ opacity: overlayOpacity }}
        />
        <div className={`aboutUs-text ${visible ? 'reveal' : 'hiddenReveal'}`}>
          <h2>Who We Are</h2>
          <p>
            Phenom Guild Africa is a Design & Build Consortium that specializes in architectural
            design, structural engineering, and construction services.
          </p>
          <p>
            We provide comprehensive services, from architectural design and structural drawings
            to full-scale construction. Our focus is on delivering high-quality, sustainable
            designs that stand the test of time.
          </p>
          <div className="aboutUs-1">
            <div>
              <h4>Projects Done</h4>
              <span>50+ Projects</span>
            </div>
            <div>
              <h4>Years of Experience</h4>
              <span>10+ Years</span>
            </div>
          </div>
          <button className="btn rounded-full">Work with us</button>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className='vision'>
        <div className='vision-1'>
          <div >
            <h2>Our Vision</h2>
            <p>
            We envision a future where exceptional design is accessible to all, blending function with artistry to create spaces that inspire and elevate. Our mission is to push the boundaries of architectural excellence while staying rooted in sustainability and community-driven values. We aim to redefine the design process and construction industry by offering innovative solutions that anticipate the needs of tomorrow , from sustainable designs to state-of-the-art 3D visualizations that ensure our clients see their dreams come to life before the first brick is laid.
            </p>
            <blockquote>
            ❝At Phenom Guild, we work with property owners, developers, and institutions to design and deliver buildings that are functional, durable, and cost-effective. From private homes to commercial developments, we focus on getting the details right , drawings that make sense on site, structures that stand the test of time, and clear communication from day one to handover.❞
            <br />
              <span className='founder'>__ Ezra Kayo, Founder</span>
            </blockquote>
          </div>

          <div>
            <Image
              src="/blueP.jpg"
              alt="Our Vision"
              width={800}
              height={800}
              className="rounded-2xl h-auto object-cover img"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className='services'>
        <ServicesSection />
      </section>
    </main>
  );
};

export default AboutSection;
