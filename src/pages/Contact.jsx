import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    
    const formData = new FormData(event.target);

    // YAHAN APNI WEB3FORMS KI ACCESS KEY DAALEIN
    formData.append("access_key", "9f94f611-4b15-486e-a81f-6945fb63a872");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We will contact you soon.");
        event.target.reset(); // Form clear karne ke liye
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
    
    setIsSubmitting(false);
    
    // 5 second baad success message hatane ke liye
    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-2">Reach Out</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            Get In Touch
          </h3>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Ready to discuss your steel casting and heavy machining requirements? We are here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full gap-8"
          >
            {/* Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 flex-grow">
              <h4 className="text-2xl font-bold text-brand-dark mb-6 border-b border-slate-100 pb-4">Contact Information</h4>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-slate-50 p-3 rounded-full text-brand-dark group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <FiMapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-slate-800">Our Location</h5>
                    <p className="text-slate-600 mt-1 font-medium">
                      Khasra No. 81, Opp. Krishna Palace,<br />
                      Roorkee Road, Sarwat,<br />
                      Muzaffarnagar 251002 (U.P.)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-slate-50 p-3 rounded-full text-brand-dark group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <FiPhone size={24} />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-slate-800">Phone Numbers</h5>
                    <p className="text-slate-600 mt-1 font-medium">+91 9927178675</p>
                    <p className="text-slate-600 font-medium">+91 7500007845</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-slate-50 p-3 rounded-full text-brand-dark group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <FiMail size={24} />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-slate-800">Email Address</h5>
                    <p className="text-slate-600 font-medium">sbindustriesmzn@gmail.com</p>
                    <p className="text-slate-600 mt-1 font-medium">furqmiza@gmail.com</p>
                  </div>
                </div>

                {/* Business Details */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-slate-50 p-3 rounded-full text-brand-dark group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <FiCheckCircle size={24} />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-slate-800">Registration Details</h5>
                    <p className="text-brand-accent mt-1 font-mono font-bold text-sm">GSTIN: 09BIIPR4801H1DC</p>
                    <p className="text-brand-accent font-mono font-bold text-sm mt-0.5">UDYAM-UP-58-0037031</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.5123469302043!2d77.69874937532313!3d29.50142177520155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1d06af4c3afb%3A0x9ba312353d9854ab!2sS.B.%20Industries!5e0!3m2!1sen!2sin!4v1773678678817!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="S.B. Industries Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-dark rounded-xl shadow-xl p-8 lg:p-10 border-t-4 border-brand-accent h-full"
          >
            <h4 className="text-2xl font-bold text-white mb-2">Send us a Message</h4>
            <p className="text-slate-400 mb-8 font-medium">Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" // Important for Web3Forms
                  required
                  className="w-full px-4 py-3 rounded bg-brand-base border border-slate-700 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" // Important for Web3Forms
                  required
                  className="w-full px-4 py-3 rounded bg-brand-base border border-slate-700 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Message/Requirements</label>
                <textarea 
                  name="message" // Important for Web3Forms
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded bg-brand-base border border-slate-700 text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your casting or machining needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full text-brand-dark font-extrabold py-4 px-4 rounded transition-all shadow-md 
                  ${isSubmitting ? 'bg-slate-500 cursor-not-allowed' : 'bg-brand-accent hover:bg-brand-hover hover:shadow-xl hover:-translate-y-1'}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>

              {/* Success / Error Message Display */}
              {result && (
                <p className={`text-center font-bold mt-4 ${result.includes('success') ? 'text-green-400' : 'text-brand-accent'}`}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;