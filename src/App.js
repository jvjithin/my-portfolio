import React, { useState, useEffect } from 'react';
import './App.css';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import profileImg from './assets/images/Jithin.jpg';
import useDarkMode from './hooks/useDarkMode';
import useScroll from './hooks/useScroll';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { showScrollButton, scrollToTop, footerRef, footerOffset } = useScroll();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <SkipLink contentId="main-content" />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <main id="main-content" className={isLoaded ? 'loaded' : ''}>
          <div className='main-content'>
            <img src={profileImg} alt="Selfie of Jithin" className="profile-picture-large" />
            <h2>Jithin Vishnu R</h2>
            <p>I am a Software Development Engineer in Test with over 4+ years of experience in the tech industry specializing in QA & Automation.</p>
          </div>
        </main>
      </div>
      <Footer footerRef={footerRef} />
      <ScrollToTopButton showScrollButton={showScrollButton} scrollToTop={scrollToTop} footerOffset={footerOffset} />
    </div>
  );
};

export default App;
