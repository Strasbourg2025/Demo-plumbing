
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">
            <div className="space-y-2 lg:space-y-4">
              <h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                Your Ideal Home
              </h1>
              <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
                <div className="h-14 md:h-20 w-32 md:w-56 rounded-full overflow-hidden relative shrink-0 border shadow-sm border-neutral-100">
                  <img 
                    src="https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=1200&auto=format&fit=crop" 
                    alt="Polished Faucet Detail" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                  — A Reality
                </h1>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 mt-2">
              <div className="flex flex-col gap-2">
                <p className="text-neutral-900 font-semibold text-lg font-dm-sans">Expert Plumbing Solutions Built on 20 Years of Integrity.</p>
                <p className="text-neutral-500 text-base md:text-lg max-w-sm font-light leading-relaxed font-dm-sans">
                  We provide professional services that combine modern technology, impeccable reliability, and the highest standards of care.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center h-14 px-10 rounded-full text-sm font-medium tracking-wider uppercase transition-all shrink-0 shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20 font-dm-sans">
                Schedule Service
              </a>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">20+</span>
                <span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium font-dm-sans uppercase tracking-widest">Years of local expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">100%</span>
                <span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium font-dm-sans uppercase tracking-widest">Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">MD</span>
                <span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium font-dm-sans uppercase tracking-widest">Anne Arundel Specialists</span>
              </div>
            </div>

            <div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern High-End Kitchen Plumbing" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium font-dm-sans">Premium Kitchen Systems</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden shadow-xl group bg-neutral-100">
            <img 
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop" 
              alt="Luxury Bathroom Design" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            <div className="absolute top-6 left-6 max-w-[220px] rounded-2xl p-3 shadow-xl z-20 bg-white">
              <div className="h-24 rounded-xl overflow-hidden mb-3 relative">
                <img 
                  src="https://images.unsplash.com/photo-1620626011761-9963d7b69763?q=80&w=400&auto=format&fit=crop" 
                  alt="System Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] font-medium mb-3 leading-snug text-neutral-600 font-dm-sans uppercase tracking-wider">
                Reliable Service. Expert Results. Within 24 hours, we diagnose and address any issue.
              </p>
              <button className="w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
              </button>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-20">
              <p className="text-sm max-w-xs font-light leading-relaxed drop-shadow-sm text-white/90 font-dm-sans">
                With Your Ideal Home, maintaining your plumbing becomes simple and stress-free. We guide you through every step—from emergency repairs to full system upgrades.
              </p>
              <button className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-lg bg-white text-neutral-900 hover:bg-neutral-100 font-dm-sans">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
