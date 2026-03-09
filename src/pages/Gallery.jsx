import { motion } from 'framer-motion';

// Dummy images (Aap inko baad me original images se replace kar sakte hain)
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Heavy Spur Gear" },
  { id: 2, src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Machined Blocks" },
  { id: 3, src: "https://images.unsplash.com/photo-1565439399-5bb8a4d4766f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Pump Casing on Lathe" },
  { id: 4, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Helical Gear Casting" },
  { id: 5, src: "https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Large Spoked Wheel" },
  { id: 6, src: "https://images.unsplash.com/photo-1580982333038-f94eb97063bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Scrap Metal Melting" },
];

const Gallery = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-72 border border-slate-200"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-10 h-1 bg-brand-accent mx-auto mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"></div>
                  <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;