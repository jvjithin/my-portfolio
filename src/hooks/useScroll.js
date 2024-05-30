import { useState, useEffect, useRef, useCallback } from 'react';

const useScroll = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [footerOffset, setFooterOffset] = useState(0);
  const footerRef = useRef(null);

  const checkScrollTop = useCallback(() => {
    if (!showScrollButton && window.scrollY > window.innerHeight) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.scrollY <= window.innerHeight) {
      setShowScrollButton(false);
    }
  }, [showScrollButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const checkScrollTopAndFooter = useCallback(() => {
    const footerHeight = footerRef.current?.offsetHeight || 0;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (bodyHeight - footerHeight - scrollPosition < windowHeight) {
      setFooterOffset(footerHeight);
    } else {
      setFooterOffset(0);
    }

    setShowScrollButton(scrollPosition > windowHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    window.addEventListener('scroll', checkScrollTopAndFooter);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
      window.removeEventListener('scroll', checkScrollTopAndFooter);
    };
  }, [checkScrollTop, checkScrollTopAndFooter]);

  return { showScrollButton, scrollToTop, footerRef, footerOffset };
};

export default useScroll;
