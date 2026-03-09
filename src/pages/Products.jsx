import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: "Heavy Duty Industrial Gears",
    description: "Large spur and helical gears precision-crafted for heavy machinery, capable of handling extreme loads.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  {
    id: 2,
    title: "Industrial Pump Casings",
    description: "High-quality volute casings and custom pump housings manufactured with exact tolerances.",
    image: "https://images.unsplash.com/photo-1565439399-5bb8a4d4766f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  {
    id: 3,
    title: "Machined Blocks & Housings",
    description: "Heavy metal bearing housings and custom machined blocks finished perfectly on our heavy lathe setup.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  {
    id: 4,
    title: "Large Spoked Wheels",
    description: "Durable, precisely balanced large metal wheels and pulleys designed for rolling mills and heavy industries.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  }
];

const Products = () => {
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
          <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-2">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            Capabilities & Products
          </h3>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            We specialize in all types of steel casting works and provide end-to-end heavy machining solutions for industrial applications.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="h-72 overflow-hidden relative">
                {/* Overlay for premium look */}
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 relative">
                {/* Accent line that grows on hover */}
                <div className="absolute top-0 left-8 w-12 h-1 bg-brand-accent group-hover:w-24 transition-all duration-300"></div>
                <h4 className="text-2xl font-extrabold text-brand-dark mb-3 mt-2 group-hover:text-brand-accent transition-colors">
                  {product.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;