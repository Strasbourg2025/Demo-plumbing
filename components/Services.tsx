
import React, { useState } from 'react';
import { ServiceItem } from '../types';

const serviceList: ServiceItem[] = [
  {
    id: 1,
    title: "Residential Plumbing",
    description: "Complete care for kitchens, bathrooms, and laundry rooms. We handle everything from high-end fixture installations to leak detection and pipe repair.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=2160&q=80",
    features: ["Water Heaters", "Faucets & Sinks", "Clogged Drains"]
  },
  {
    id: 2,
    title: "System Upgrades",
    description: "Modernizing your home’s efficiency with tankless water heaters, whole-home filtration systems, and preventative maintenance plans.",
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?w=2160&q=80",
    features: ["Tankless Units", "Water Filtration", "Smart Leak Detection"]
  },
  {
    id: 3,
    title: "Emergency Repairs",
    description: "Rapid response for the issues that can't wait. We protect your home from water damage with 24/7 reliability and expert diagnostics.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=2160&q=80",
    features: ["Burst Pipe Repair", "Sewer Line Backups", "Emergency Shut-offs"]
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section className="border-t pt-24 px-6 pb-24 bg-white border-neutral-200" id="services">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-20 font-dm-sans">Expertise</span>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm hidden lg:block bg-neutral-100">
            <div className="relative w-full h-full">
              {serviceList.map((service) => (
                <img
                  key={service.id}
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeId === service.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent z-20 pointer-events-none"></div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col">
            {serviceList.map((service) => (
              <div 
                key={service.id} 
                className="border-b py-8 cursor-pointer border-neutral-200 group"
                onClick={() => setActiveId(service.id)}
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <span className={`text-xl font-mono transition-colors pt-2 ${activeId === service.id ? 'text-neutral-900' : 'text-neutral-400'}`}>
                    {String(service.id).padStart(2, '0')}
                  </span>
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start w-full">
                      <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 ${activeId === service.id ? 'text-neutral-900' : 'text-neutral-500 group-hover:text-neutral-700'}`}>
                        {service.title}
                      </h3>
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 ${activeId === service.id ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-400'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${activeId === service.id ? 'rotate-0' : '-rotate-45'}`}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </div>
                    </div>
                    
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${activeId === service.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className={`pt-2 pb-4 transition-opacity duration-500 delay-100 ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
                            <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                          </div>
                          <p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base font-dm-sans">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-3 text-sm text-neutral-500 font-dm-sans uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
