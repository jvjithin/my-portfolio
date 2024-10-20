import React from 'react';
import PropTypes from 'prop-types';
import ToggleSwitch from './ToggleSwitch';

const Header = ({ isDarkMode, toggleDarkMode }) => (
  <header>
    <div className="profile-header">
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
