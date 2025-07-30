import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Summary = ({ summary }) => {
  return (
    <motion.section 
      className="section-padding bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <motion.div 
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-900">Professional Summary</h2>
        </motion.div>
        
        <motion.div 
          className="card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <p className="text-lg text-secondary-700 leading-relaxed">
            {summary}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Summary; 