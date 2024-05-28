import React, { useState, useEffect } from 'react';
import './App.css';
import profileImg from './assets/Jithin.jpg';

const App = () => {
  // Retrieve the dark mode state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save the new mode to localStorage
      return newMode;
    });
  };

  useEffect(() => {
    setIsLoaded(true); // Set loaded state to true to trigger animation
  }, []);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <header>
          <div className="profile-header">
            <img src={profileImg} alt="Profile" className="profile-picture-small" />
            <h1>Jithin</h1>
          </div>
          <div className="toggle-switch" onClick={toggleDarkMode}>
            <div className={`toggle-knob ${isDarkMode ? 'dark' : 'light'}`}></div>
          </div>
        </header>
        <main className={isLoaded ? 'loaded' : ''}>
          <img src={profileImg} alt="Profile" className="profile-picture-large" />
          <h2>Jithin Vishnu R</h2>
          <p>I am a Software Development Engineer in Test with over 4+ years of experience in the tech industry specializing in QA & Automation.</p>
        </main>
        <footer>
          <p>Jithin</p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/jvjithin" rel='noreferrer' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/jvjithin" rel='noreferrer' target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="https://facebook.com/jitviz" rel='noreferrer' target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com/jit_viz" rel='noreferrer' target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/jitviz" rel='noreferrer' target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
