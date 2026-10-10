"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="bg-transparent py-16 md:py-24 relative overflow-hidden" id="about">
      {/* Decorative corner crosshairs (like the screenshot) */}
      <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-gray-300 opacity-50 hidden lg:block"></div>
      <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-gray-300 opacity-50 hidden lg:block"></div>
      <div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-gray-300 opacity-50 hidden lg:block"></div>
      <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-gray-300 opacity-50 hidden lg:block"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#00B4D8]/10 rounded-full">
            <span className="text-[#00B4D8] font-bold tracking-[0.2em] uppercase text-xs">Industry Leader</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-deep-navy tracking-tight max-w-4xl">
            Simplifying Business Establishment
          </h2>
        </div>

        {/* 3-Column Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-gray-200 bg-white rounded-[32px] overflow-hidden shadow-sm">
          
          {/* Col 1: Text */}
          <div className="p-6 sm:p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col h-full bg-gray-50/30">
            <h3 className="text-xl font-bold text-deep-navy mb-8 flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/logo.png" alt="Juno BizHub Logo" fill className="object-contain" />
              </div>
              Juno BizHub
            </h3>
            
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              Juno BizHub is a UAE-based Corporate Service Provider focused on making business establishment and ongoing corporate administration simpler, clearer and more efficient.
            </p>
            <p className="text-gray-600 mb-12 text-sm sm:text-base leading-relaxed">
              We support founders, investors, SMEs and international businesses with practical guidance across the business lifecycle — from choosing the right jurisdiction and activity to licensing, visas, banking assistance and post-incorporation support.
            </p>
            
            <div className="mt-auto pt-4">
              <Link href="/services" className="text-[#00B4D8] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm uppercase tracking-wide">
                Our Services <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Image */}
          <div className="border-b lg:border-b-0 lg:border-r border-gray-200 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
            <video 
              src="/juno%20videos/dubai%20video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wide">In the Heart of Dubai</h4>
              <p className="text-gray-300 text-sm tracking-wide leading-relaxed">
                We are located in the heart of Dubai, at Aspin Commercial Tower, Sheikh Zayed Road.
              </p>
            </div>
          </div>

          {/* Col 3: 2x2 Grid of Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 bg-gray-50/50">
            {/* Item 1 */}
            <div className="p-6 sm:p-8 lg:p-10 border-b sm:border-r lg:border-r-0 xl:border-r border-gray-200 flex flex-col justify-center">
              <div className="text-gray-400 font-medium text-[10px] tracking-[0.2em] uppercase mb-4">Clarity</div>
              <h4 className="text-deep-navy text-xl sm:text-2xl font-light leading-[1.2] tracking-tight">
                We simplify UAE setup options, requirements, documentation and timelines.
              </h4>
            </div>
            
            {/* Item 2 */}
            <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-200 flex flex-col justify-center">
              <div className="text-gray-400 font-medium text-[10px] tracking-[0.2em] uppercase mb-4">Coordination</div>
              <h4 className="text-deep-navy text-xl sm:text-2xl font-light leading-[1.2] tracking-tight">
                We coordinate the multiple steps involved in formation, visas, and banking.
              </h4>
            </div>

            {/* Item 3 */}
            <div className="p-6 sm:p-8 lg:p-10 border-b sm:border-b-0 sm:border-r lg:border-r-0 xl:border-r border-gray-200 flex flex-col justify-center">
              <div className="text-gray-400 font-medium text-[10px] tracking-[0.2em] uppercase mb-4">Responsiveness</div>
              <h4 className="text-deep-navy text-xl sm:text-2xl font-light leading-[1.2] tracking-tight">
                A single point of contact helps clients move faster and reduces back-and-forth.
              </h4>
            </div>

            {/* Item 4 */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-gray-400 font-medium text-[10px] tracking-[0.2em] uppercase mb-4">Long-Term Support</div>
              <h4 className="text-deep-navy text-xl sm:text-2xl font-light leading-[1.2] tracking-tight">
                We build relationships beyond incorporation through ongoing corporate support.
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

