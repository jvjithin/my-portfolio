import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import profileImg from './assets/images/Jithin.jpg';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const footerRef = useRef(null);
  const [footerOffset, setFooterOffset] = useState(0);

  const checkScrollTop = useCallback(() => {
    if (!showScrollButton && window.scrollY > window.innerHeight) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.scrollY <= window.innerHeight) {
      setShowScrollButton(false);
    }
  }, [showScrollButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  const checkScrollTopAndFooter = useCallback(() => {
    const footerHeight = footerRef.current?.offsetHeight || 0;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (bodyHeight - footerHeight - scrollPosition < windowHeight) {
      setFooterOffset(footerHeight);
    } else {
      setFooterOffset(0);
    }

    setShowScrollButton(scrollPosition > windowHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTopAndFooter);
    return () => window.removeEventListener('scroll', checkScrollTopAndFooter);
  }, [checkScrollTopAndFooter]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Helmet>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; img-src 'self' data:; connect-src 'self'; font-src 'self' https://cdnjs.cloudflare.com; object-src 'none'; upgrade-insecure-requests;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="no-referrer-when-downgrade" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </Helmet>
      <div className="container">
        <header>
          <div className="profile-header">
            <img src={profileImg} alt="Selfie of Jithin" className="profile-picture-small" />
            <h1>Jithin</h1>
          </div>
          <button
            className="toggle-switch"
            tabIndex={0}
            title='Theme toggle'
            onClick={toggleDarkMode}
            onKeyPress={(e) => e.key === 'Enter' && toggleDarkMode()}
            aria-pressed={isDarkMode}
            aria-label={isDarkMode ? "Toggle light mode" : "Toggle dark mode"}
          >
            <div className={`toggle-knob ${isDarkMode ? 'dark' : 'light'}`}></div>
          </button>
        </header>
        <main className={isLoaded ? 'loaded' : ''}>
          <div className='main-content'>
            <img src={profileImg} alt="Selfie of Jithin" className="profile-picture-large" />
            <h2>Jithin Vishnu R</h2>
            <p>I am a Software Development Engineer in Test with over 4+ years of experience in the tech industry specializing in QA & Automation.</p>
          </div>
          {showScrollButton && (
            <button
              className="scroll-to-top"
              title='Scroll to top'
              onClick={scrollToTop}
              style={{ position: 'fixed', bottom: `${20 + footerOffset}px`, right: '20px' }}
              aria-label="Scroll to top"
            >
              <i className="fa-solid fa-angles-up"></i>
            </button>
          )}
        </main>
      </div>
      <footer ref={footerRef}>
        <p>Jithin</p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/jvjithin" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/jvjithin" rel="noopener noreferrer" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="https://facebook.com/jitviz" rel="noopener noreferrer" target="_blank" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com/jit_viz" rel="noopener noreferrer" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/jitviz" rel="noopener noreferrer" target="_blank" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
