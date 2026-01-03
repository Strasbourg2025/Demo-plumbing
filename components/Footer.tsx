
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t pt-16 pb-8 px-6 bg-white border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-lg font-semibold tracking-widest uppercase block mb-6">Matos.</a>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed font-dm-sans">
              Premium home remodeling services for Dallas, Texas. Built on integrity, transparency, and architectural quality.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-4 text-neutral-900 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-dm-sans">
              <li><a href="#" className="transition-colors hover:text-neutral-900">Interior Remodeling</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-900">Exterior Improvements</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-900">System Upgrades</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-4 text-neutral-900 uppercase tracking-widest text-[10px]">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-dm-sans">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dallas, Texas
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect width="20" height="16" x="2" y="4" rx="2"></rect></svg> hello@matoshome.com
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> (214) 555-0123
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
          <p className="text-xs text-neutral-400 font-dm-sans">© 2024 Matos Home Improvements LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors text-neutral-400 hover:text-neutral-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="transition-colors text-neutral-400 hover:text-neutral-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
