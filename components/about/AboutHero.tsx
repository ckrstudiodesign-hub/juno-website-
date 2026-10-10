"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#03045E]">
      {/* Background Image with Deep Navy Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/burj khalifa.jpg"
          alt="Dubai Corporate Landscape"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03045E]/90 via-[#03045E]/60 to-[#03045E]/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">About Juno BizHub</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
            Elevating Your <br />
            <span className="text-[#00B4D8]">Corporate Journey</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Founded on two decades of elite banking expertise, we navigate the corporate landscape of Dubai with unparalleled precision, transparency, and prestige.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
