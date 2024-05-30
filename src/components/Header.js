import React from 'react';
import PropTypes from 'prop-types';
import profileImg from '../assets/images/Jithin.jpg';
import ToggleSwitch from './ToggleSwitch';

const Header = ({ isDarkMode, toggleDarkMode }) => (
  <header>
    <div className="profile-header">
      <img src={profileImg} alt="Selfie of Jithin" className="profile-picture-small" />
      <h1>Jithin</h1>
    </div>
    <ToggleSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
  </header>
);

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
