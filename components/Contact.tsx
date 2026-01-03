
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 text-center bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">Ready to fix it for good?</h2>
        <p className="text-neutral-500 text-lg mb-10 max-w-lg mx-auto font-dm-sans">Schedule a consultation with Robert today. We’ll discuss your project, budget, and how we can keep your home running smoothly.</p>
        
        <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300 font-dm-sans"
            />
          </div>
          <button 
            type="submit" 
            disabled={submitted}
            className={`w-full font-medium rounded-md px-4 py-3 text-sm transition-all flex justify-center items-center gap-2 ${submitted ? 'bg-green-600' : 'bg-neutral-900 hover:bg-neutral-800'} text-white shadow-lg shadow-neutral-900/10 uppercase tracking-widest`}
          >
            {submitted ? 'Request Received' : 'Request Consultation'}
          </button>
          <p className="text-xs text-center mt-4 text-neutral-400 font-dm-sans uppercase tracking-[0.15em]">No spam. No pressure. Just professional plumbing advice.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
