import React from 'react';
import PropTypes from 'prop-types';

const SkipLink = ({ contentId }) => {
  return (
    <a href={`#${contentId}`} className="skip-link">
      Skip to main content
    </a>
  );
};

SkipLink.propTypes = {
  contentId: PropTypes.string.isRequired
};

export default SkipLink;