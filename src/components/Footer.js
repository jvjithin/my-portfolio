import React from 'react';

const Footer = ({ footerRef }) => (
  <footer ref={footerRef}>
    <p>Jithin Vishnu R &copy; {new Date().getFullYear()}</p>
    <div className="social-icons">
      <a href="https://linkedin.com/in/jvjithin" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
      <a href="https://github.com/jvjithin" rel="noopener noreferrer" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
      <a href="https://facebook.com/jitviz" rel="noopener noreferrer" target="_blank" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="https://instagram.com/jit_viz" rel="noopener noreferrer" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
      <a href="https://x.com/jitviz" rel="noopener noreferrer" target="_blank" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
    </div>
  </footer>
);

export default Footer;
