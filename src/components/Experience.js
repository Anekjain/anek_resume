import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = ({ experience }) => {
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
    hidden: { opacity: 0, y: 30 },
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
            <Briefcase className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-900">Professional Experience</h2>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((job, index) => (
            <motion.div 
              key={job.id}
              className="card group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                    {job.logo && job.logo !== "/company-logos/placeholder.png" ? (
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          console.log(`Failed to load logo for ${job.company}:`, job.logo);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        onLoad={(e) => {
                          console.log(`Successfully loaded logo for ${job.company}:`, job.logo);
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full flex items-center justify-center ${job.logo && job.logo !== "/company-logos/placeholder.png" ? 'hidden' : ''}`}>
                      <span className="text-xl font-bold text-primary-600">
                        {job.company.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-secondary-600">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span className="text-lg font-medium text-primary-600">
                      {job.company}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <motion.li 
                        key={achievementIndex}
                        className="flex items-start gap-3 text-secondary-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + achievementIndex * 0.05 }}
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience; 