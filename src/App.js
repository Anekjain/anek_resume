import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from './data/resumeData';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header personalInfo={resumeData.personalInfo} />
        <Summary summary={resumeData.summary} />
        <Experience experience={resumeData.experience} />
        <Skills skills={resumeData.skills} />
        <Certifications certifications={resumeData.certifications} />
        <Education education={resumeData.education} />
        <Hobbies hobbies={resumeData.hobbies} />
        <Footer personalInfo={resumeData.personalInfo} />
      </motion.div>
    </div>
  );
}

export default App;
