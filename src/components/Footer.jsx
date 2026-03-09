import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi';
// Social Media Icons import kiye hain
import { FaIndustry, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dot-dark text-slate-300 pt-16 pb-6 border-t-[4px] border-brand-accent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col & Social Media */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <FaIndustry className="text-3xl text-brand-accent mr-3" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white tracking-tight leading-none">S.B. INDUSTRIES</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Eco-friendly manufacturing using high-quality scrap metal. Precision steel casting and heavy lathe machining in Muzaffarnagar.
            </p>
            <div className="bg-brand-base px-4 py-2 rounded border border-slate-700 inline-block mb-6">
              <span className="text-xs text-slate-400 block">Verified GSTIN</span>
              <span className="font-mono text-sm text-white font-bold">09BIIPR4801H1Z3</span>
            </div>
            
            {/* Social Media Handles */}
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Connect With Us</h4>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-base border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-md hover:-translate-y-1">
                <FaFacebookF size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-base border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-md hover:-translate-y-1">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-base border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-md hover:-translate-y-1">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-base border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-md hover:-translate-y-1">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Gallery', 'Contact'].map(item => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link to={path} className="text-sm hover:text-brand-accent transition-colors flex items-center">
                      <FiArrowRight className="mr-2 text-brand-accent" /> {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-2 inline-block">Industries Served</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3"></div> Sugar Mills</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3"></div> Paper & Pulp Mills</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3"></div> Cement Plants</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3"></div> Heavy Machinery</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="bg-brand-base p-6 rounded-lg border border-slate-700 shadow-lg">
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FiMapPin className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={18} />
                <span>Opp. Krishna Palace, Roorkee Road, Muzaffarnagar 251001 (U.P.)</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={18} />
                <span>+91 9927178675 <br/> +91 7500007845</span>
              </li>
            </ul>
            <Link to="/contact" className="mt-6 block text-center bg-brand-accent hover:bg-brand-hover text-brand-dark py-2.5 rounded font-bold transition-colors shadow-md">
              Send Inquiry
            </Link>
          </div>
        </div>

        {/* Bottom Bar with Policy Links */}
        <div className="border-t border-slate-800 pt-6 mt-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} S.B. Industries. All Rights Reserved.
            </p>
            {/* Policy Links Group */}
            <div className="flex flex-wrap justify-center space-x-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <Link to="/policies" className="hover:text-brand-accent transition-colors">Terms</Link>
              <span>|</span>
              <Link to="/policies" className="hover:text-brand-accent transition-colors">Payment Policy</Link>
              <span>|</span>
              <Link to="/policies" className="hover:text-brand-accent transition-colors">Privacy</Link>
            </div>
          </div>
          
          <div className="flex items-center bg-brand-base px-5 py-2 rounded-full border border-slate-700 shadow-inner">
            <span className="text-xs text-slate-400 mr-2">Digital Presence crafted by</span>
            <span className="text-sm font-extrabold text-brand-accent tracking-wide">InfiTech Creatives</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;