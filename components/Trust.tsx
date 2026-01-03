
import React from 'react';

const Trust: React.FC = () => {
  return (
    <section className="py-24 px-6 border-b bg-white border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-neutral-100 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2787&auto=format&fit=crop" 
              alt="Professional Plumbing Tools" 
              className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded-md border bg-white/90 border-white/20">
              <p className="text-xs font-medium text-neutral-900 font-dm-sans">Anne Arundel County, MD</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">
            A legacy of <span className="text-neutral-400">honest work.</span>
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed max-w-lg text-neutral-600 font-dm-sans">
            <p>
              In an industry often plagued by uncertainty, <strong className="text-neutral-900">Your Ideal Home</strong> stands as a pillar of reliability. Robert believes that how we treat our neighbors is just as important as the quality of our plumbing.
            </p>
            <p>
              We are an Anne Arundel-based, family-owned company understanding the specific needs of local homeowners and businesses. When you hire Robert, you hire peace of mind.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 font-dm-sans">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Licensed
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 font-dm-sans">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Insured
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 font-dm-sans">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Bonded
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
