import React from 'react'
import Link from 'next/link';
import SocialLinks from '../socials';
import './footer.css';



const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="footer-1">
        <div className='footer-2'>
          <h3>About us</h3>
          <p>The Phenom guild is one of Kenya's leading project development and construction firm. We are active all over Kenya!</p>
          <div className="footer-socials">
            <SocialLinks />
        </div>
        </div>
        <div>
          <h2>Company</h2>
          <nav className="navigation">
          <Link href="/about" className='link'>About Us</Link>
          <Link href="/projects" className='link'>Our Projects</Link>
          <Link href="/services" className='link'>Our Services</Link>
          <Link href="/contact" className='link'>Contact us</Link>
          </nav>

        </div>
        <div>
          <form action="">
            <input type="email" placeholder='email'/>
            <textarea name="message" id="message">write message</textarea>
            <button className='btn rounded-full'>Submit</button>
          </form>
        </div>
      </div>
      <hr />
      <div className='copyright'>
      <span>Copyright © {new Date().getFullYear()}. The Phenom Guild Africa.</span>
      </div>
    </div>
  )
}

export default Footer