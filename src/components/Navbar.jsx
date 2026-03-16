import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiAward } from 'react-icons/fi';
import { FaIndustry } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const navLinks = ['Home', 'About', 'Products', 'Gallery', 'Contact'];

  return (
    <>
      {/* Top Bar (Desktop only) */}
      <div className="hidden lg:flex bg-brand-dark text-slate-300 py-2 text-sm justify-between items-center px-8 z-50 relative border-b border-slate-800">
        <div className="flex space-x-6">
          <span className="flex items-center text-xs font-semibold tracking-wider">
            <FiPhone className="mr-2 text-brand-accent" /> +91 9927178675, +91 7500007845
          </span>
          {/* ISO Certification in Top Bar */}
          <span className="flex items-center text-xs font-bold tracking-wider text-white">
            <FiAward className="mr-1.5 text-brand-accent" size={14} /> ISO 9001:2015 CERTIFIED
          </span>
        </div>
        <div className="flex space-x-3">
          {/* Correct GSTIN */}
          <span className="font-mono bg-brand-base px-3 py-1 rounded text-brand-accent text-xs border border-slate-700">
            GSTIN: 09BIIPR4801H1DC
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg' : 'lg:top-9 top-0 bg-white border-b border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo - Mobile responsive sizing & no-wrap added */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <FaIndustry className="text-2xl sm:text-3xl text-brand-dark mr-2 sm:mr-3 group-hover:text-brand-accent transition-colors" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-none whitespace-nowrap">S.B. INDUSTRIES</span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 font-bold tracking-[0.2em] mt-1 whitespace-nowrap">STEEL CASTING WORKS</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <Link 
                    key={item} to={path} 
                    className={`text-sm font-bold uppercase tracking-wide transition-colors ${isActive(path) ? 'text-brand-accent' : 'text-slate-700 hover:text-brand-accent'}`}
                  >
                    {item}
                  </Link>
                )
              })}
              <Link to="/contact" className="bg-brand-accent hover:bg-brand-hover text-brand-dark px-6 py-2.5 rounded font-bold shadow-md transition-all">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Toggle Button - Size fixed */}
            <button className="md:hidden text-2xl text-brand-dark p-2 flex-shrink-0 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Absolute positioning added so it overlays content perfectly */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden absolute left-0 w-full bg-white border-t border-slate-100 overflow-y-auto max-h-[calc(100vh-80px)] shadow-2xl origin-top"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((item) => {
                  const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                  return (
                    <Link 
                      key={item} to={path} onClick={() => setIsOpen(false)} 
                      className={`block px-4 py-3 font-bold rounded ${isActive(path) ? 'bg-slate-50 text-brand-accent' : 'text-slate-800'}`}
                    >
                      {item}
                    </Link>
                  )
                })}
                <div className="pt-4 border-t border-slate-100 mt-2 pb-2">
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-accent text-brand-dark py-3 rounded font-bold shadow-md">
                        Get a Quote
                    </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;