
import React from 'react';

const steps = [
  { id: '01', title: "Consultation", desc: "We meet to discuss your vision, budget, and timeline. We provide a clear, detailed estimate." },
  { id: '02', title: "Planning", desc: "Design, material selection, and permitting. We handle the paperwork so you don't have to." },
  { id: '03', title: "Construction", desc: "Our team executes with precision, maintaining a clean site and providing weekly updates." },
  { id: '04', title: "Delivery", desc: "Final walkthrough and handover. We ensure every detail meets the Matos Standard." }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">The Process</h2>
            <p className="text-neutral-400 font-dm-sans">Stress-free execution from concept to completion.</p>
          </div>
          <a href="#contact" className="text-sm border-b pb-1 transition-colors border-neutral-700 hover:border-white font-dm-sans">Start your journey</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="border-l pl-6 relative border-neutral-800 group hover:border-neutral-500 transition-colors">
              <span className="font-mono text-xs mb-4 block text-neutral-600 group-hover:text-neutral-400 transition-colors">{step.id}</span>
              <h3 className="text-lg font-medium mb-3 text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400 font-dm-sans">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
