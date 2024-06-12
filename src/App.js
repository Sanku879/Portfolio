// src/App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Import the CSS file for custom styles

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initialize AOS animations
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
