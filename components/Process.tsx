
import React from 'react';

const steps = [
  { id: '01', title: "Consultation", desc: "We discuss your plumbing needs and provide a clear, detailed estimate based on your specific home layout." },
  { id: '02', title: "Assessment", desc: "On-site inspection and diagnostic. We identify the root cause of the problem, not just the symptoms." },
  { id: '03', title: "The Work", desc: "Our team executes with precision, maintaining a clean workspace and providing updates on progress." },
  { id: '04', title: "Final Testing", desc: "A comprehensive walkthrough and pressure test to ensure every connection meets the Robert’s Standard." }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">The Process</h2>
            <p className="text-neutral-400 font-dm-sans">Stress-free execution from call to completion.</p>
          </div>
          <a href="#contact" className="text-sm border-b pb-1 transition-colors border-neutral-700 hover:border-white font-dm-sans uppercase tracking-widest">Start your journey</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="border-l pl-6 relative border-neutral-800 group hover:border-neutral-500 transition-colors">
              <span className="font-mono text-xs mb-4 block text-neutral-600 group-hover:text-neutral-400 transition-colors">{step.id}</span>
              <h3 className="text-lg font-medium mb-3 text-white uppercase tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400 font-dm-sans">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
