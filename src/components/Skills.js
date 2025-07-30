import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users } from 'lucide-react';

const Skills = ({ skills }) => {
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

  const SkillCard = ({ title, skills, icon: Icon, colorClass }) => (
    <motion.div 
      className="card"
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 ${colorClass} rounded-lg flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-secondary-900">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-all duration-300 cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );

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
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills that drive successful project delivery and team collaboration.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillCard
            title="Technical Skills"
            skills={skills.technical}
            icon={Code}
            colorClass="bg-primary-500"
          />
          <SkillCard
            title="Soft Skills"
            skills={skills.soft}
            icon={Users}
            colorClass="bg-secondary-600"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills; 