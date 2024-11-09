import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';

const App = () => {
  return (
    <div>
    <Navbar/>
    <div className='py-10'></div>
    <Hero/>
    <About/>
    <Experience/>
    </div>
  );
};

export default App;