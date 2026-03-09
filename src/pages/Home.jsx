import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiRefreshCw, FiSettings, FiTool, FiCheckCircle, FiShield, FiClock } from 'react-icons/fi';
import { FaIndustry, FaTractor, FaBoxOpen, FaBuilding, FaCogs } from 'react-icons/fa';

const Home = () => {
  const industries = [
    {
      id: 1,
      name: "Sugar Mills",
      description: "Heavy-duty gears, crushers, and sprockets designed to withstand continuous milling operations.",
      icon: <FaTractor size={36} className="text-brand-accent" />
    },
    {
      id: 2,
      name: "Paper & Pulp Mills",
      description: "Precision-machined rollers, pulleys, and customized cast blocks for paper manufacturing units.",
      icon: <FaBoxOpen size={36} className="text-brand-accent" />
    },
    {
      id: 3,
      name: "Cement Plants",
      description: "Durable volute casings and bearing housings engineered for extreme environments.",
      icon: <FaBuilding size={36} className="text-brand-accent" />
    },
    {
      id: 4,
      name: "Steel & Rolling Mills",
      description: "Robust casting components and large spoked wheels to support heavy metal processing.",
      icon: <FaIndustry size={36} className="text-brand-accent" />
    }
  ];

  return (
    <div className="w-full">
      
      {/* Hero Section with Video Background */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          {/* Online Demo Video */}
          <source src="/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute z-10 w-full h-full bg-brand-dark/80"></div>

        <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/50 text-brand-accent text-xs font-bold tracking-widest uppercase"
          >
            Muzaffarnagar's Trusted Casting Partner
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
          >
            Sustainable <span className="text-brand-accent">Steel Casting</span> Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming high-quality scrap metal into precision-engineered heavy industrial gears, machined blocks, and pulleys.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="bg-brand-accent hover:bg-brand-hover text-brand-dark px-10 py-4 rounded font-extrabold transition-all shadow-lg hover:shadow-xl text-lg hover:-translate-y-1">
              Get a Quote
            </Link>
            <Link to="/gallery" className="bg-transparent border-2 border-slate-300 hover:border-brand-accent hover:bg-brand-accent hover:text-brand-dark text-white px-10 py-4 rounded font-extrabold transition-all shadow-lg text-lg hover:-translate-y-1">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* NEW: About Us Quick Intro */}
      <div className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-2">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 tracking-tight">
                Building Industrial Strength Since Establishment.
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Situated opposite Krishna Palace on Roorkee Road, Muzaffarnagar, <strong className="text-brand-dark">S.B. Industries</strong> has emerged as a reliable name in the heavy manufacturing sector. We don't just melt metal; we engineer durability.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our in-house capabilities span from the initial breaking of scrap metal sand-casting to the final precision finish on our heavy-duty lathe machines. This closed-loop process ensures competitive pricing without compromising on industrial standards.
              </p>
              <Link to="/about" className="inline-flex items-center text-brand-accent font-bold hover:text-brand-hover transition-colors">
                Read Our Full Story <span className="ml-2">→</span>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-brand-accent transform translate-x-4 translate-y-4 rounded-xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Machining Process" 
                className="rounded-xl shadow-xl w-full h-[400px] object-cover border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Expertise Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">Our Core Expertise</h3>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide end-to-end manufacturing solutions, ensuring quality at every step of the process from raw material to finished product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border-b-4 border-slate-200 hover:border-brand-accent group"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-brand-dark shadow-sm mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <FiRefreshCw size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Scrap Metal Casting</h3>
              <p className="text-slate-600 leading-relaxed">
                Eco-friendly approach utilizing high-quality scrap metal. We melt and cast it into durable components, reducing waste and cost.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border-b-4 border-slate-200 hover:border-brand-accent group"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-brand-dark shadow-sm mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <FiSettings size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Heavy Steel Casting</h3>
              <p className="text-slate-600 leading-relaxed">
                Specialized in sand-casting for large spoked wheels, pump casings, and heavy-duty industrial gears.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border-b-4 border-slate-200 hover:border-brand-accent group"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-brand-dark shadow-sm mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <FiTool size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Precision Lathe Machining</h3>
              <p className="text-slate-600 leading-relaxed">
                In-house heavy lathe machining setup to give perfect finishing and precision to the casted blocks and housings.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* NEW: Infrastructure & Machinery */}
      <div className="py-24 bg-brand-base text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1565439399-5bb8a4d4766f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">State-of-the-art <span className="text-brand-accent">Infrastructure</span></h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Our facility is equipped with heavy-duty machinery capable of handling large-scale industrial requirements. From massive melting furnaces to precision lathe machines, our setup ensures that every product leaving our floor meets the highest standards of durability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-200"><FaCogs className="text-brand-accent mr-3" size={20}/> Heavy-Duty Lathe Machines</li>
                <li className="flex items-center text-slate-200"><FaCogs className="text-brand-accent mr-3" size={20}/> Advanced Sand-Casting Setup</li>
                <li className="flex items-center text-slate-200"><FaCogs className="text-brand-accent mr-3" size={20}/> Scrap Metal Processing Units</li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Lathe Machine" className="rounded-lg shadow-lg h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Casting" className="rounded-lg shadow-lg h-48 w-full object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-24 bg-dot-dark bg-brand-dark text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Industries We Serve</h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Supplying high-grade casting and machining components to critical industrial sectors across the region.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-brand-accent transition-colors duration-300 text-center flex flex-col items-center group shadow-lg"
              >
                <div className="mb-6 p-4 bg-brand-dark rounded-full group-hover:scale-110 transition-transform duration-300 shadow-inner border border-slate-700 group-hover:border-brand-accent">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{industry.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW: Why Choose Us Section */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight">Why Partner With Us?</h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6">
              <FiCheckCircle className="text-5xl text-brand-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-2">Uncompromised Quality</h3>
              <p className="text-slate-600">Strict quality control measures at every stage, from melting scrap to final machining.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6">
              <FiClock className="text-5xl text-brand-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-2">Timely Delivery</h3>
              <p className="text-slate-600">We respect your project timelines and ensure orders are fulfilled within the committed schedule.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="p-6">
              <FiShield className="text-5xl text-brand-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-2">Cost-Effective Pricing</h3>
              <p className="text-slate-600">Our in-house capabilities and scrap recycling process allow us to offer highly competitive rates.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick CTA Banner */}
      <div className="bg-brand-accent py-20 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight"
          >
            Ready to Discuss Your Industrial Needs?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-dark/80 font-semibold text-xl mb-10 max-w-2xl mx-auto"
          >
            Contact our experts today and get a competitive quote for your casting and machining requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/contact" className="inline-block bg-brand-dark hover:bg-slate-800 text-white px-12 py-4 rounded-lg font-extrabold text-lg transition-all shadow-2xl hover:shadow-brand-dark/50 hover:-translate-y-1">
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Home;