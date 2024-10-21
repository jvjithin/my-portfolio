import React, { useState, useEffect } from 'react';
import './App.css';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import DownloadResumeButton from './components/DownloadResumeButton';
import profileImg from './assets/images/Jithin.jpg';
import useDarkMode from './hooks/useDarkMode';
import useScroll from './hooks/useScroll';
import Timeline from './components/Timeline';
import timelineData from './assets/data/timeline';

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
            <div className="profile-container">
              <img src={profileImg} alt="Selfie of Jithin" className="profile-picture-large" />
              <h2 className='rainbow-text'>Hi,<br />I'm Jithin Vishnu R</h2>
              <p className="profile-description">I am a Software Quality Engineer with over 4 years of experience in the tech industry specializing in QA & Automation.</p>
              <DownloadResumeButton />
            </div>
            <h2 className='timeline-header'>Reflecting on my journey...</h2>
            <Timeline items={timelineData} />
          </div>
        </main>
      </div>
      <Footer footerRef={footerRef} />
      <ScrollToTopButton showScrollButton={showScrollButton} scrollToTop={scrollToTop} footerOffset={footerOffset} />
    </div>
  );
};

export default App;
