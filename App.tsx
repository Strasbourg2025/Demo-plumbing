
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Commitments from './components/Commitments';
import Services from './components/Services';
import Process from './components/Process';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIDesignAssistant from './components/AIDesignAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Visual Break */}
        <div className="w-full h-96 md:h-[600px] relative overflow-hidden bg-neutral-200">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" 
            alt="Minimalist Interior" 
            className="w-full h-full object-cover grayscale opacity-90"
          />
          <div className="absolute inset-0 bg-neutral-900/10"></div>
        </div>

        <Commitments />
        <Services />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating AI Assistant */}
      <AIDesignAssistant />
    </div>
  );
};

export default App;
