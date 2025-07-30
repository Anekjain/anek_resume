import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = ({ education }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

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
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-900">Education</h2>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              className="card group"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Institution Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center shadow-sm">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-secondary-600">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span className="text-lg font-medium text-primary-600">
                      {edu.institution}
                    </span>
                  </div>

                  {edu.gpa && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education; 