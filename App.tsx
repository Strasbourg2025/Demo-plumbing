
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
            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2400&auto=format&fit=crop" 
            alt="Expert Plumbing Detail" 
            className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 hover:scale-105"
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
