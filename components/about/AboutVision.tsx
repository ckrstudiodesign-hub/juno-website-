"use client";

import React from 'react';
import { Eye, Landmark } from 'lucide-react';

const AboutVision = () => {
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gray-50/50 p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 hover:border-[#0077B6]/30 transition-all hover:shadow-xl group space-y-6 md:space-y-8">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-md rounded-2xl flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <Eye className="text-[#0077B6] w-8 h-8 md:w-10 md:h-10" />
               </div>
               <h3 className="text-3xl md:text-4xl font-black text-[#03045E]">Our Vision</h3>
               <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed italic border-l-4 border-[#00B4D8] pl-6">
                 "To redefine business setup in the UAE through clarity, speed, and enduring client partnership."
               </p>
            </div>
            <div className="bg-gray-50/50 p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 hover:border-[#0077B6]/30 transition-all hover:shadow-xl group space-y-6 md:space-y-8">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-md rounded-2xl flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <Landmark className="text-[#0077B6] w-8 h-8 md:w-10 md:h-10" />
               </div>
               <h3 className="text-3xl md:text-4xl font-black text-[#03045E]">Our Mission</h3>
               <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed italic border-l-4 border-[#00B4D8] pl-6">
                 "To build the UAE’s most trusted business setup advisory, where corporate compliance meets effortless execution and lasting partnership."
               </p>
            </div>
         </div>
      </div>
    </section>
  );
};

export default AboutVision;
