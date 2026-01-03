
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
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" 
                    alt="Modern Home Detail" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                  — A Reality
                </h1>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 mt-2">
              <p className="text-neutral-500 text-base md:text-lg max-w-sm font-light leading-relaxed">
                We will help you choose a property that combines modern style, impeccable comfort, and the highest investment appeal.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center h-14 px-10 rounded-full text-sm font-medium tracking-wider uppercase transition-all shrink-0 shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20">
                Find Your Home
              </a>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">500+</span>
                <span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium font-dm-sans">Families found a home</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">200+</span>
                <span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium font-dm-sans">Homes sold across Dallas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">95%</span>
                <span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium font-dm-sans">Clients return</span>
              </div>
            </div>

            <div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute right-6 bottom-6 flex flex-col gap-2 z-10">
                <button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"></path></svg>
                </button>
                <button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden shadow-xl group bg-neutral-100">
            <img 
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1200&auto=format&fit=crop" 
              alt="Luxury Villa" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            <div className="absolute top-6 right-6 flex gap-3 z-20">
              <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </button>
            </div>

            <div className="absolute top-6 left-6 max-w-[220px] rounded-2xl p-3 shadow-xl z-20 bg-white">
              <div className="h-24 rounded-xl overflow-hidden mb-3 relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop" 
                  alt="Property Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] font-medium mb-3 leading-snug text-neutral-600 font-dm-sans">
                Within 7 days, we will find a property that fully matches your budget and preferences.
              </p>
              <button className="w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
              </button>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-20">
              <p className="text-sm max-w-xs font-light leading-relaxed drop-shadow-sm text-white/90">
                With us, buying a home becomes simple, safe, and enjoyable, as we guide you through every step — from selecting the property to completing the paperwork.
              </p>
              <button className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-lg bg-white text-neutral-900 hover:bg-neutral-100">
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
