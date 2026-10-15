"use client";

import React from 'react';
import { MessageSquare, FileText, CheckCircle, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Consult",
    desc: "Understanding your vision, business model, and specific needs in the UAE.",
    icon: <MessageSquare size={24} className="text-[#00B4D8]" />
  },
  {
    id: 2,
    title: "Recommend",
    desc: "Proposing the optimal jurisdiction, license type, and corporate structure.",
    icon: <FileText size={24} className="text-[#00B4D8]" />
  },
  {
    id: 3,
    title: "Document",
    desc: "Gathering and preparing all necessary legal documents and applications.",
    icon: <CheckCircle size={24} className="text-[#00B4D8]" />
  },
  {
    id: 4,
    title: "Execute",
    desc: "Submitting applications, obtaining approvals, and securing your license.",
    icon: <Rocket size={24} className="text-[#00B4D8]" />
  },
  {
    id: 5,
    title: "Support",
    desc: "Providing ongoing banking, visa, and corporate compliance assistance.",
    icon: <HeartHandshake size={24} className="text-[#00B4D8]" />
  }
];

const ClientJourney = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <span className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-xs block mb-4">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-black text-deep-navy tracking-tighter">How We Work</h2>
        </div>

        <div className="relative">
          {/* Connecting SVG Path (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[200px] -translate-y-1/2 z-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              {/* Subtle background path */}
              <path d="M0,100 C150,100 200,20 300,20 C400,20 450,180 550,180 C650,180 700,20 800,20 C900,20 950,180 1050,180 C1150,180 1200,100 1200,100" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
              {/* Highlighted path (gradient) */}
              <path d="M0,100 C150,100 200,20 300,20 C400,20 450,180 550,180 C650,180 700,20 800,20 C900,20 950,180 1050,180 C1150,180 1200,100 1200,100" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="100" x2="1200" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00B4D8" stopOpacity="0.2" />
                  <stop offset="0.5" stopColor="#00B4D8" />
                  <stop offset="1" stopColor="#00B4D8" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              // Alternate vertical positioning for the zigzag effect
              const isEven = index % 2 !== 0;
              
              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col relative group ${isEven ? 'lg:mt-32' : 'lg:-mt-12'}`}
                >
                  {/* Faded Background Number */}
                  <div className="absolute -top-16 -left-4 text-[8rem] font-black text-slate-200/50 leading-none z-0 pointer-events-none select-none transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-110">
                    {step.id}
                  </div>
                  
                  {/* Icon Hexagon/Circle */}
                  <div className="relative z-10 mb-8 mx-auto lg:mx-0 animate-float" style={{ animationDelay: `${index * 0.4}s` }}>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_15px_30px_rgba(0,180,216,0.2)] border border-slate-100 rotate-3 group-hover:rotate-0 group-hover:shadow-[0_20px_40px_rgba(0,180,216,0.4)] transition-all duration-500">
                      <div className="-rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center lg:text-left">
                    <h3 className="text-xl font-bold text-deep-navy mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientJourney;
