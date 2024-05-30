import React from 'react';

const SkipLink = ({ contentId }) => {
  return (
    <a href={`#${contentId}`} className="skip-link">
      Skip to main content
    </a>
  );
};

export default SkipLink;