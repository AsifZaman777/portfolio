import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <div>
    <Navbar/>
    <div className='py-10'></div>
    <Hero/>
    <About/>
    </div>
  );
};

export default App;