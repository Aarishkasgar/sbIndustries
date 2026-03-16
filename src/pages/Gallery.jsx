import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';

// Dummy images (Aap inko baad me original images se replace kar sakte hain)
const galleryImages = [
  { id: 1, src: "/img1.jpeg", title: "Heavy Spur Gear" },
  { id: 2, src: "/img2.jpeg", title: "Machined Blocks" },
  { id: 3, src: "/img3.jpeg", title: "Pump Casing on Lathe" },
  { id: 4, src: "/img4.jpeg", title: "Helical Gear Casting" },
  { id: 5, src: "/img5.jpeg", title: "Large Spoked Wheel" },
  { id: 6, src: "/img6.jpeg", title: "Scrap Metal Melting" },
  { id: 7, src: "/img7.jpeg", title: "Precision Machining" },
  { id: 8, src: "/img8.jpeg", title: "Factory Setup" },
  { id: 9, src: "/img9.jpeg", title: "Raw Material Processing" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            Our Work Gallery
          </h3>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            A visual glimpse into our heavy machining and steel casting projects handled entirely in-house.
          </p>
        </motion.div>

        {/* Gallery Grid (Improved styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl cursor-pointer h-80 bg-white"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              
              {/* Premium Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <div className="w-10 h-1 bg-brand-accent mb-2"></div>
                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <div className="bg-brand-accent/20 p-3 rounded-full backdrop-blur-sm border border-brand-accent/50 text-brand-accent">
                      <FiZoomIn size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Screen Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white hover:text-brand-accent transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md z-[101]"
            >
              <FiX size={32} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col"
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-full max-h-[75vh] object-contain rounded-t-xl"
              />
              <div className="bg-white p-6 rounded-b-xl shadow-2xl">
                <h3 className="text-2xl font-extrabold text-brand-dark">{selectedImage.title}</h3>
                <p className="text-brand-accent font-bold text-sm tracking-widest uppercase mt-1">S.B. Industries Portfolio</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;