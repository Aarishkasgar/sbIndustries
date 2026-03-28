import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: "Heavy Duty Industrial Gears",
    description: "Large spur and helical gears precision-crafted for heavy machinery, capable of handling extreme loads.",
    image: "/pic1.png" 
  },
  {
    id: 2,
    title: "Industrial Pump Casings",
    description: "High-quality volute casings and custom pump housings manufactured with exact tolerances.",
    image: "/pic2.png" 
  },
  {
    id: 3,
    title: "Agricultural & Sugar Mill Spare Parts",
    description: "Durable spare parts for agricultural machinery and sugar mills, including rollers, shafts, and custom components.",
    image: "/pic3.png" 
  },
  {
    id: 4,
    title: "Large Spoked Wheels & Pulleys",
    description: "Precisely balanced large metal wheels, pulleys, and machined blocks finished perfectly on our heavy lathe setup.",
    image: "/pic4.png" 
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
            As an ISO 9001:2015 certified unit, we are recognized manufacturers of all types of casting products. We provide end-to-end heavy machining solutions for various industrial applications.
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