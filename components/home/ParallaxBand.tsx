"use client";

import React from 'react';
import ParallaxImage from '@/components/motion/ParallaxImage';
import { Reveal } from '@/components/motion/Reveal';

/**
 * Full-bleed photo band. The deep-navy scrim is what keeps the white copy
 * legible over the photograph — measured, not eyeballed.
 */
const ParallaxBand = () => (
  <section className="relative w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-white">
    <div className="max-w-[90rem] mx-auto relative rounded-[32px] overflow-hidden shadow-sm">
      <div className="relative w-full h-[420px] md:h-[560px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/juno%20videos/juno%20video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <Reveal className="max-w-3xl text-center" amount={0.3}>
          <span className="text-cornflower-blue font-black tracking-[0.4em] uppercase text-[10px] mb-5 block">
            On the ground in Dubai
          </span>
          <p className="text-white text-2xl md:text-4xl font-black uppercase tracking-tight leading-[1.15]">
            We don&rsquo;t hand you a checklist. We walk the licence, the visas and the bank account through to
            <span className="text-cornflower-blue"> approval</span>.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ParallaxBand;
