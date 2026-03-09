import { motion } from 'framer-motion';
import { FiFileText, FiCreditCard, FiShield, FiBriefcase } from 'react-icons/fi';

const Policies = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-2">Legal Information</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            Company Policies
          </h3>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 font-medium">
            Please read our standard terms, work policies, and payment procedures carefully.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-12">
          
          {/* 1. Work Policy */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-xl border border-slate-200"
          >
            <div className="flex items-center mb-4">
              <FiBriefcase className="text-brand-accent text-2xl mr-3" />
              <h4 className="text-2xl font-bold text-brand-dark">Work & Manufacturing Policy</h4>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-3 leading-relaxed">
              <li><strong>Raw Material:</strong> We utilize high-quality scrap metal and standardized alloys for casting unless specific raw materials are requested by the client.</li>
              <li><strong>Lead Time:</strong> Manufacturing and machining timelines depend on the complexity and volume of the order. Estimated delivery dates will be provided in the official quotation.</li>
              <li><strong>Tolerances:</strong> All machining and casting will be done as per standard industrial tolerances unless an exact CAD drawing with specific tolerances is provided.</li>
              <li><strong>Inspection:</strong> Clients are welcome to inspect the goods at our Muzaffarnagar unit before the final dispatch.</li>
            </ul>
          </motion.section>

          {/* 2. Payment Policy */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-xl border border-slate-200"
          >
            <div className="flex items-center mb-4">
              <FiCreditCard className="text-brand-accent text-2xl mr-3" />
              <h4 className="text-2xl font-bold text-brand-dark">Payment Terms</h4>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-3 leading-relaxed">
              <li><strong>Advance Payment:</strong> A standard 50% advance payment is required to initiate the casting and molding process.</li>
              <li><strong>Final Clearance:</strong> The remaining 50% balance must be cleared against the Proforma Invoice before the final dispatch of the material from our workshop.</li>
              <li><strong>Taxes:</strong> All prices quoted are exclusive of GST unless stated otherwise. GST will be billed strictly as per our registered GSTIN: 09BIIPR4801H1Z3.</li>
              <li><strong>Freight:</strong> Transportation and loading/unloading charges are to be borne by the buyer unless explicitly included in the contract.</li>
            </ul>
          </motion.section>

          {/* 3. Terms & Conditions */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-xl border border-slate-200"
          >
            <div className="flex items-center mb-4">
              <FiFileText className="text-brand-accent text-2xl mr-3" />
              <h4 className="text-2xl font-bold text-brand-dark">Terms & Conditions</h4>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accepting a quotation from S.B. Industries, the buyer agrees to the terms outlined herein. Once the casting process begins, orders cannot be cancelled, and advance payments will be forfeited to cover raw material and labor costs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any structural defects found in the casting must be reported within 7 days of delivery. S.B. Industries holds the right to repair or replace the defective part at our discretion. We hold no liability for operational damages caused by machinery overload.
            </p>
          </motion.section>

          {/* 4. Privacy Policy */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-xl border border-slate-200"
          >
            <div className="flex items-center mb-4">
              <FiShield className="text-brand-accent text-2xl mr-3" />
              <h4 className="text-2xl font-bold text-brand-dark">Privacy Policy</h4>
            </div>
            <p className="text-slate-600 leading-relaxed">
              S.B. Industries respects your privacy. Any industrial designs, CAD files, or technical drawings shared with us for manufacturing purposes are kept strictly confidential. We do not share your contact details or proprietary designs with any third-party manufacturers or competitors.
            </p>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default Policies;