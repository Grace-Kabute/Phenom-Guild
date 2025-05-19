'use client';

import Link from 'next/link';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/" className='link'><strong>PHENOM</strong></Link>
      </div>

      <nav className="nav-links">
        <Link href="/home" className='link'>Home</Link>
        <Link href="/about" className='link'>About</Link>
        <Link href="/projects" className='link'>Projects</Link>
        <Link href="/contact" className='link'>Services</Link>
      </nav>

      <div className="nav-icons">
        <a href="https://wa.me/254702352806" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="mailto:thephenomguildafrica@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
