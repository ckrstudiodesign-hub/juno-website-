"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const Values = () => {
  const values = [
    {
      title: "01 Integrity",
      desc: "Clear communication, transparent scope and professional handling of client information.",
      icon: <Shield className="w-10 h-10 text-electric-sapphire" />
    },
    {
      title: "02 Client Focus",
      desc: "Solutions designed around the client's activity, ownership structure, budget and growth plans.",
      icon: <Users className="w-10 h-10 text-electric-sapphire" />
    },
    {
      title: "03 Execution",
      desc: "Structured follow-through from documentation and submission to completion and handover.",
      icon: <Zap className="w-10 h-10 text-electric-sapphire" />
    },
    {
      title: "04 Professionalism",
      desc: "Reliable coordination with authorities, partners, banks and service providers.",
      icon: <CheckCircle className="w-10 h-10 text-electric-sapphire" />
    },
    {
      title: "05 Long-Term Thinking",
      desc: "Building recurring relationships through renewals, amendments and ongoing corporate support.",
      icon: <TrendingUp className="w-10 h-10 text-electric-sapphire" />
    }
  ];

  return (
    <section className="section-padding bg-[#03045E] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0077B6]/20 to-transparent rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-12 md:mb-20">
        <h2 className="text-[#00B4D8] font-bold tracking-[0.3em] uppercase text-sm mb-4">The Golden Standard</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white">Our Core <span className="text-white">Principles</span></h3>
        <div className="w-16 h-1.5 bg-[#0077B6] rounded-full mx-auto mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {values.map((val, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-[#0077B6]/50 transition-all group ${i === 3 ? 'lg:col-start-1 lg:ml-auto lg:w-full lg:max-w-sm' : ''} ${i === 4 ? 'lg:col-start-2 lg:mr-auto lg:w-full lg:max-w-sm' : ''}`}
          >
            <div className="w-16 h-16 bg-[#0077B6]/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#0077B6] group-hover:-translate-y-2 transition-all duration-300 text-[#00B4D8] group-hover:text-white">
              {React.cloneElement(val.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">{val.title}</h4>
            <p className="text-blue-100/70 font-light leading-relaxed text-sm md:text-base">{val.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Values;
