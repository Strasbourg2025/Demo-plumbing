
import React from 'react';
import { Commitment } from '../types';

const commitments: Commitment[] = [
  {
    title: "Total Accountability",
    description: "We take full responsibility for the project. No finger-pointing. If a challenge arises, we solve it.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
  },
  {
    title: "Radical Transparency",
    description: "Clear communication. Real timelines. No hidden costs. You remain informed at every phase.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
  },
  {
    title: "Respect for Property",
    description: "We treat your home as if it were our own. Clean worksites and protection for your belongings are mandatory.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
  },
  {
    title: "Precision Execution",
    description: "From framing to the final paint stroke, our craftsmanship is measured in millimeters, not inches.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2"></path></svg>
  },
  {
    title: "Respected Timelines",
    description: "We respect your time. We set realistic schedules and work diligently to meet them without compromising quality.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
  },
  {
    title: "Long-term Support",
    description: "Our relationship doesn't end when the dust settles. We stand behind our work with solid guarantees.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.505 3.858 3 5.5l7 7Z"></path></svg>
  }
];

const Commitments: React.FC = () => {
  return (
    <section id="commitments" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">The Matos Standard</h2>
            <p className="text-neutral-500 max-w-md">Our reputation is built on what we do when no one is watching.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-neutral-200">
          {commitments.map((item, idx) => (
            <div key={idx} className="p-8 group transition-colors bg-white hover:bg-neutral-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-dm-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitments;