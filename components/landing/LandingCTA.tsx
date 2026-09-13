"use client";

import React from 'react';
import Link from 'next/link';

const LandingCTA = () => {
  return (
    <section className="w-full py-20 bg-[#00102A] relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0077B6]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00B4D8]/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center">
        
        <span className="text-[#00B4D8] font-bold tracking-widest text-sm uppercase mb-4 block">
          Take the Next Step
        </span>
        
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
          Ready to Talk to an expert today?
        </h2>
        
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Secure a free consultation with our business setup specialists and discover the most cost-effective structure for your UAE company.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#hero-form" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#E63946] text-white font-bold rounded-lg shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            BOOK A FREE CONSULTATION
          </Link>
          <a 
            href="tel:+971501234567" 
            className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            CALL US NOW
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default LandingCTA;
