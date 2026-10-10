"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center space-y-10 px-4">
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#03045E] leading-tight">
           Experience the <br /><span className="text-[#0077B6]">Juno BizHub</span> Journey
         </h2>
         <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
           Join the ranks of successful international businesses that started their UAE journey with us.
         </p>
         <div className="flex justify-center pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0077B6] hover:bg-[#03045E] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 gap-4">
              Get a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </div>
    </section>
  );
};

export default AboutCTA;
