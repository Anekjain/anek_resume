import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hobbies = ({ hobbies }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section 
      className="section-padding bg-secondary-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-900">Hobbies & Interests</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hobbies.map((hobby, index) => (
            <motion.div 
              key={index}
              className="card text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-secondary-700 group-hover:text-primary-600 transition-colors">
                {hobby}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hobbies; 