import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-4 text-xxl">
      <a
        href="https://www.instagram.com/the_phenom_guild/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100064048837402"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:text-blue-600 transition"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
