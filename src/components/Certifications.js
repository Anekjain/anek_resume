import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = ({ certifications }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            <Award className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-900">Certifications</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="card group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden bg-transparent">
                  {cert.logo ? (
                    <img 
                      src={cert.logo} 
                      alt={`${cert.authority} logo`}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        console.log(`Failed to load certification logo for ${cert.authority}:`, cert.logo);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      onLoad={(e) => {
                        console.log(`Successfully loaded certification logo for ${cert.authority}:`, cert.logo);
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full flex items-center justify-center ${cert.logo ? 'hidden' : ''} bg-gradient-to-br from-yellow-400 to-yellow-600`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-secondary-600 mb-2">
                    {cert.authority}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certifications; 