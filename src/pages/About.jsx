import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Background accent block for design */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-accent rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-base rounded-br-3xl -z-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="S.B. Industries Workshop" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">
              About S.B. Industries
            </h3>
            
            <p className="text-slate-600 text-lg mb-4 leading-relaxed font-medium">
              Located opposite Krishna Palace on Roorkee Road, Muzaffarnagar, S.B. Industries is a premier manufacturer specializing in heavy steel casting and precision machining.
            </p>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We take immense pride in our <strong className="text-brand-dark">sustainable manufacturing approach</strong>. By efficiently utilizing high-quality scrap metal, we melt and cast it into durable heavy machinery components. From the initial sand-casting phase to final heavy lathe machining, our entire process is rigorously handled in-house to ensure unmatched quality.
            </p>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent"></div>
              <h4 className="font-extrabold text-brand-dark text-xl mb-4">Our Core Values</h4>
              <ul className="space-y-3">
                {[
                  "Eco-Friendly Casting using Scrap Metal",
                  "Precision & Strict Quality Control",
                  "Customized Heavy Machining Solutions",
                  "Timely Delivery & Cost-Effectiveness"
                ].map((value, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <FiCheckCircle className="text-brand-accent mr-3 flex-shrink-0" size={20} />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;