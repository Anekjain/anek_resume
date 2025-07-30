import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Gamepad } from 'lucide-react';

const Header = ({ personalInfo }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactItems = [
    { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, text: personalInfo.location },
    { icon: Linkedin, text: 'LinkedIn', href: personalInfo.linkedin },
    { icon: Github, text: 'GitHub', href: personalInfo.github },
    { icon: Globe, text: 'Blog', href: personalInfo.blog },
    { icon: Gamepad, text: 'Click here for Fun', href: personalInfo.game }
  ];
  
  console.log("personalInfo in Header:", personalInfo);
  return (
    <motion.header 
      className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Profile Picture */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-transparent">
              {personalInfo.profilePicture && personalInfo.profilePicture !== "/placeholder-avatar.jpg" ? (
                <img 
                  src={personalInfo.profilePicture} 
                  alt={`${personalInfo.name} profile`}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    console.log(`Failed to load profile picture:`, personalInfo.profilePicture);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  onLoad={(e) => {
                    console.log(`Successfully loaded profile picture:`, personalInfo.profilePicture);
                  }}
                />
              ) : null}
              <div className={`w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center ${personalInfo.profilePicture && personalInfo.profilePicture !== "/placeholder-avatar.jpg" ? 'hidden' : ''}`}>
                <span className="text-4xl lg:text-5xl font-bold text-white">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold gradient-text mb-2"
              whileHover={{ scale: 1.02 }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-secondary-600 font-medium"
              whileHover={{ scale: 1.01 }}
            >
              {personalInfo.title}
            </motion.p>
          </motion.div>
        </div>

        {/* Contact Details */}
        <motion.div 
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={itemVariants}
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-5 h-5 text-primary-600 group-hover:text-primary-700 transition-colors" />
                <span className="text-secondary-700 group-hover:text-secondary-900 transition-colors">
                  {item.text}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 