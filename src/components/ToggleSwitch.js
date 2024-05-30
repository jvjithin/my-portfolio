import React from 'react';
import PropTypes from 'prop-types';

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

ToggleSwitch.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default ToggleSwitch;
