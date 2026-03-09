import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const FloatingMenu = () => {
  const phoneNumber = "919927178675"; 
  const message = "Hello S.B. Industries, I want to inquire about your steel casting and machining services.";
  
  // Google Map Search Link (Muzaffarnagar Location)
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Opp.+Krishna+Palace,+Roorkee+Road,+Muzaffarnagar";
  
  // Google Review Link (Abhi search link hai, baad me asli Google My Business link se replace kar lena)
  const reviewLink = "https://www.google.com/search?q=S.B.+Industries+Muzaffarnagar";

  const actionButtons = [
    { 
      id: 'review', 
      icon: <FaStar size={20} />, 
      bgColor: 'bg-yellow-500', 
      hoverColor: 'hover:bg-yellow-600',
      link: reviewLink, 
      label: 'Write a Review', 
      delay: 0.7 
    },
    { 
      id: 'map', 
      icon: <FaMapMarkerAlt size={20} />, 
      bgColor: 'bg-red-500', 
      hoverColor: 'hover:bg-red-600',
      link: mapLink, 
      label: 'Our Location', 
      delay: 0.8 
    },
    { 
      id: 'call', 
      icon: <FaPhoneAlt size={20} />, 
      bgColor: 'bg-blue-600', 
      hoverColor: 'hover:bg-blue-700',
      link: `tel:+${phoneNumber}`, 
      label: 'Call Now', 
      delay: 0.9 
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      
      {/* Secondary Buttons (Review, Map, Call) */}
      {actionButtons.map((btn) => (
        <motion.a
          key={btn.id}
          href={btn.link}
          target={btn.id !== 'call' ? "_blank" : "_self"}
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: btn.delay }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative group flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white ${btn.bgColor} ${btn.hoverColor} transition-colors duration-300`}
          aria-label={btn.label}
        >
          {btn.icon}
          
          {/* Tooltip (Hover par dikhega, mobile par hidden rahega) */}
          <span className="absolute right-full mr-4 bg-brand-dark text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-slate-700 hidden md:block">
            {btn.label}
            {/* Tooltip Arrow */}
            <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-brand-dark rotate-45 border-r border-t border-slate-700"></span>
          </span>
        </motion.a>
      ))}

      {/* Main WhatsApp Button (Bada aur Animated) */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1ebe57] transition-colors duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={36} className="relative z-10" />
        
        {/* Ping Animation */}
        <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>

        {/* Tooltip for WhatsApp */}
        <span className="absolute right-full mr-4 bg-[#25D366] text-brand-dark text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md hidden md:block">
          WhatsApp Us
          <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-[#25D366] rotate-45"></span>
        </span>
      </motion.a>

    </div>
  );
};

export default FloatingMenu;