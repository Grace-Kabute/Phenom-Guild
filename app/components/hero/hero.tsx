'use client';

import Navbar from '../navbar/navbar'
import ButtonLink from '../button';
import {useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './hero.css';
import { ChevronDown } from 'lucide-react';


const images = [
  '/hero-bg.jpg',
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-4.jpg',
];

const Hero = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showArrow, setShowArrow] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const current = window.scrollY;


      if (currentScrollTop < lastScrollTop) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollTop(currentScrollTop);
      setShowArrow(current < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);
  return (
    <main className='HeroContainer'>
      <div className={`navbar ${isScrollingUp ? '' : 'navbar-hidden'}`}>
        <Navbar />
      </div>
        <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="/trimmed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="grid-overlay"></div>
      <div className="hero-content">        
        <h1>
          WE ARE BUILT FOR THIS
        </h1>
        <h2>You focus on the dream. We handle the blueprint and the build.</h2>
        <h3 className="mt-4 text-lg md:text-xl text-gray-700">
          We deliver architectural plans, structural drawings, Bills of Quantities, and complete construction services. We handle the technical work so you can focus on the vision.        </h3>
        <p><i>Trusted by homeowners and developers across Kenya.</i></p>
        <ButtonLink href="/gallery" className='btn'>See our work</ButtonLink>
        </div>
        {showArrow && (
        <div className="scroll-arrow">
          <ChevronDown size={60} />
        </div>
      )}
    </main>
  )
}

export default Hero