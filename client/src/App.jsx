import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';

const App = () => {
  return (
    <div className='overflow-hidden'>
    <Navbar/>
    <div className='py-10'></div>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Research/>
    </div>
  );
};

export default App;