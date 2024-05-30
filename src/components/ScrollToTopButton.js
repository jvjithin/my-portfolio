import React from 'react';
import PropTypes from 'prop-types';

const ScrollToTopButton = ({ showScrollButton, scrollToTop, footerOffset }) => (
  showScrollButton && (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{ position: 'fixed', bottom: `${20 + footerOffset}px`, right: '20px' }}
      aria-label="Scroll to top"
      title='Scroll to top'
    >
      <i className="fa-solid fa-angles-up"></i>
    </button>
  )
);

ScrollToTopButton.propTypes = {
  showScrollButton: PropTypes.bool.isRequired,
  scrollToTop: PropTypes.func.isRequired,
  footerOffset: PropTypes.number.isRequired
};

export default ScrollToTopButton;
