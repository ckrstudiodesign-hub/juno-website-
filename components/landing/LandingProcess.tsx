"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LandingProcess = () => {
  const steps = [
    {
      title: "Free Consultation",
      description: "Speak with our experts to define your business needs and structure.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Submit Documents",
      description: "Provide the required paperwork. We'll handle the applications and approvals.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Receive Trade License",
      description: "Get your official UAE trade license and start doing business legally.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Process Visas",
      description: "We facilitate medical tests, Emirates ID, and residency visa stamping.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Open Bank Account",
      description: "We connect you with top UAE banks for a smooth account opening.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#0077B6] font-bold tracking-wider text-sm uppercase mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#03045E]">
            From Call to Company in Days
          </h2>
        </div>

        {/* Desktop Process View */}
        <div className="hidden lg:grid grid-cols-5 gap-4 xl:gap-6 relative">
          
          {/* Connecting line */}
          <div className="absolute top-[100px] left-10 right-10 h-0.5 bg-gray-200 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 relative border border-gray-100 shadow-sm">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#03045E]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="bg-white px-4 py-1 rounded-full text-sm font-bold text-[#0077B6] w-fit border border-[#0077B6]/20 mb-4 shadow-sm">
                STEP {index + 1}
              </div>
              
              <h3 className="text-lg font-bold text-[#03045E] mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Process View */}
        <div className="lg:hidden flex flex-col gap-8 relative">
          {/* Vertical connecting line */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#0077B6] text-white flex items-center justify-center font-bold shadow-md z-10 shrink-0">
                  {index + 1}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-grow">
                <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#03045E] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LandingProcess;
