import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Ye current page ka URL (path) nikalta hai
  const { pathname } = useLocation();

  // Jab bhi 'pathname' change hoga, ye function chalega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ye screen par kuch show nahi karega, sirf background me kaam karega
};

export default ScrollToTop;