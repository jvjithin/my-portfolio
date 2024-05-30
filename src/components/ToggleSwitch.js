import React from 'react';

const ToggleSwitch = ({ isDarkMode, toggleDarkMode }) => (
  <button
    type="button"
    className="toggle-switch"
    tabIndex={0}
    onClick={toggleDarkMode}
    onKeyDown={(e) => e.key === 'Enter' && toggleDarkMode()}
    aria-pressed={isDarkMode}
    aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
  >
    <div className={`toggle-knob ${isDarkMode ? 'dark' : 'light'}`}></div>
  </button>
);

export default ToggleSwitch;
