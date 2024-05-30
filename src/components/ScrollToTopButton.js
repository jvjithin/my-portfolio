import React from 'react';

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

export default ScrollToTopButton;
