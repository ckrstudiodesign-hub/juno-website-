"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, BarChart3, Target, Zap, Landmark } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

const points = [
  {
    title: 'Clear Explanation',
    desc: 'Clear explanation of setup options before a client commits.',
    icon: Target,
  },
  {
    title: 'Practical Coordination',
    desc: 'Practical coordination across licensing, visas, documentation and banking assistance.',
    icon: Shield,
  },
  {
    title: 'Single Point of Contact',
    desc: 'A single point of contact for the business owner to move faster and reduce back-and-forth.',
    icon: Zap,
  },
  {
    title: 'Long-Term Relationships',
    desc: 'Focus on long-term relationships rather than one-off transactions.',
    icon: Landmark,
  },
  {
    title: 'Growing Network',
    desc: 'A growing network of Free Zone and professional partners to widen client options.',
    icon: BarChart3,
  },
];

const WhyChooseUs = () => (
  <section className="section-padding relative overflow-hidden bg-white">
    {/* Background Skyline Image */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
      style={{ backgroundImage: "url('/images/hero.png')" }} 
    />
    
    {/* Subtle light overlay to ensure the glass looks bright and crisp */}
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/30 to-white/70" />

    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Apple-style Glassmorphism Wrapper */}
      <div className="bg-white/40 backdrop-blur-[40px] border border-white/70 rounded-[40px] shadow-[0_30px_80px_-20px_rgba(0,30,80,0.15)] p-6 sm:p-10 md:p-16 relative overflow-hidden">
        
        {/* Inner subtle glow for extra gloss */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />

        {/* Editorial header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 md:mb-20 relative z-10">
          <Reveal className="lg:col-span-7" direction="right">
            <span className="text-[#0077B6] font-black tracking-[0.4em] uppercase text-xs block mb-6">
              Juno BizHub Difference
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
              Why Clients <br />
              <span className="text-[#00B4D8]">Choose Us</span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5" direction="left" delay={0.1}>
            <p className="text-gray-700 font-medium leading-relaxed text-lg mb-8">
              We provide practical advice, transparent execution, and a single point of coordination for your
              business setup in the UAE.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0077B6] text-white font-black transition-all duration-300 hover:bg-[#00B4D8] hover:shadow-lg hover:-translate-y-1"
            >
              Start Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Numbered rows */}
        <Stagger className="border-t border-gray-900/10 relative z-10" stagger={0.08} amount={0.05}>
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title}>
                <div className="group relative border-b border-gray-900/10 overflow-hidden">
                  {/* Tint wipes in from the left */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-white/70 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out pointer-events-none"
                  />

                  <div className="relative grid grid-cols-12 items-center gap-y-4 gap-x-4 md:gap-x-8 py-8 px-2 md:px-6">
                    <div className="col-span-2 md:col-span-1">
                      <span className="text-2xl md:text-3xl font-black tabular-nums text-gray-900/20 group-hover:text-[#0077B6] transition-colors duration-500">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="col-span-10 md:col-span-5 flex items-center gap-4 md:gap-6">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/80 border border-white flex items-center justify-center text-[#0077B6] shadow-sm transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg md:text-2xl font-black text-gray-900 leading-tight transition-transform duration-500 ease-out group-hover:translate-x-1">
                        {point.title}
                      </h3>
                    </div>

                    <div className="col-span-12 md:col-span-5 pl-[4.5rem] md:pl-0">
                      <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                        {point.desc}
                      </p>
                    </div>

                    <div className="hidden md:flex col-span-1 justify-end">
                      <ArrowRight
                        size={20}
                        className="text-gray-900/20 group-hover:text-[#0077B6] group-hover:translate-x-1 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
