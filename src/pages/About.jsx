import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiAward, FiUsers } from 'react-icons/fi';

const About = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      
      {/* 1. Company Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-accent rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-base rounded-br-3xl -z-10"></div>
            <img 
              src="/sbimg1.jpg" 
              alt="S.B. Industries Workshop" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"
            />
          </motion.div>

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
              Established in 2020 and located at Khasra No. 81, Opposite Krishna Palace on Roorkee Road (Sarwat), Muzaffarnagar, S.B. Industries is an ISO 9001:2015 certified premier manufacturer specializing in heavy steel casting and precision machining.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We take immense pride in our <strong className="text-brand-dark">sustainable manufacturing approach</strong>. By efficiently utilizing high-quality scrap metal, we melt and cast it into durable heavy machinery components. From the initial sand-casting phase to final heavy lathe machining, our entire process is rigorously handled in-house to ensure unmatched quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-brand-dark font-bold">
                <FiCheckCircle className="text-brand-accent mr-3" size={24}/> ISO 9001:2015 Certified
              </div>
              <div className="flex items-center text-brand-dark font-bold">
                <FiCheckCircle className="text-brand-accent mr-3" size={24}/> In-House Lathe Setup
              </div>
              <div className="flex items-center text-brand-dark font-bold">
                <FiCheckCircle className="text-brand-accent mr-3" size={24}/> Eco-Friendly Scrap Use
              </div>
              <div className="flex items-center text-brand-dark font-bold">
                <FiCheckCircle className="text-brand-accent mr-3" size={24}/> Timely Delivery
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Leadership / Founder Section */}
      <div className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-2">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              From the Founder's Desk
            </h3>
            <div className="w-20 h-1 bg-brand-accent mx-auto mt-4"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 flex justify-center"
            >
              {/* Founder Image Placeholder */}
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-brand-accent shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Founder of S.B. Industries" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <h4 className="text-3xl font-extrabold text-brand-dark mb-2">Mr. Mohd Furkan</h4>
              <p className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-6">Proprietor</p>
              
              <blockquote className="text-slate-600 text-lg italic leading-relaxed mb-6 border-l-4 border-brand-accent pl-4">
                "Since our inception in 2020, our journey at S.B. Industries started with a simple vision: to provide the heavy industries of Muzaffarnagar and beyond with casting solutions that are not only robust and precise, but also environmentally sustainable. By recycling scrap metal into high-grade machinery parts, we are building a stronger tomorrow."
              </blockquote>
              
              <p className="text-slate-600 leading-relaxed font-medium">
                Under his expert guidance and hands-on approach, S.B. Industries has grown rapidly into a trusted, UDYAM and ISO registered manufacturing unit. His dedication ensures that every gear, pulley, and casing that leaves the factory meets the highest industry standards.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FiTarget size={100} />
            </div>
            <FiTarget className="text-brand-accent mb-6" size={40} />
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-slate-300 leading-relaxed">
              To deliver precision-engineered steel casting and heavy machining solutions that enhance the operational efficiency of our clients, while maintaining sustainable manufacturing practices.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-accent text-brand-dark p-10 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FiAward size={100} />
            </div>
            <FiAward className="text-brand-dark mb-6" size={40} />
            <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
            <p className="text-brand-dark/80 font-medium leading-relaxed">
              To be recognized as the most trusted and technically advanced steel casting partner in Uttar Pradesh, setting industry benchmarks for quality, cost-effectiveness, and reliability.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-brand-base text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FiUsers size={100} />
            </div>
            <FiUsers className="text-brand-accent mb-6" size={40} />
            <h4 className="text-2xl font-bold mb-4">Our Team</h4>
            <p className="text-slate-300 leading-relaxed">
              Backed by a team of highly skilled machinists, casting experts, and quality controllers who work tirelessly to turn raw scrap into perfectly balanced industrial components.
            </p>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default About;