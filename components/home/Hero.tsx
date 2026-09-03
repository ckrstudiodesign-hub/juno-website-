"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // A full-bleed moving background is exactly what prefers-reduced-motion is for.
  // CSS can't stop playback, so hold on the poster frame instead.
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      const video = videoRef.current;
      if (!video) return;
      if (media.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          /* autoplay refused (e.g. low-power mode) — the poster stays visible */
        });
      }
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col px-4 sm:px-6 lg:px-8 pt-24 pb-0 bg-[#f9f9f9]">
      {/* Outer padding creates the floating card effect. We use pb-0 because TrustBadges will overlap the bottom */}
      <div className="relative flex-1 w-full max-w-[1800px] mx-auto bg-[#608A9F] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl flex items-center min-h-[75dvh]">
        
        {/* Dot matrix. Static + no blend mode: animating background-position repaints
            every frame, and mix-blend forces a backdrop readback — neither is
            affordable on top of a 4K video decode. */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.10]"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at left center, black 10%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at left center, black 10%, transparent 70%)'
          }}
        />

        {/* Background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            poster="/hero-architecture.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/juno%20videos/dubai%20juno.mp4" type="video/mp4" />
          </video>

          {/* Scrim: keeps the white copy legible over moving footage. Heaviest on the
              left where the text sits, fading right so the shot stays visible. */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2f4854]/95 via-[#2f4854]/75 to-[#2f4854]/30" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#2f4854]/60 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="relative z-20 w-full px-8 sm:px-16 lg:px-24 py-20 flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Text Column */}
            <div className="flex flex-col justify-center max-w-3xl">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
                  }
                }}
                className="space-y-8"
              >
                <motion.h1 
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-sans font-medium text-white leading-[1.1] tracking-tight"
                >
                  Your Business <br /> Our Expertise
                </motion.h1>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="max-w-xl"
                >
                  <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed">
                    Juno BizHub is your premier corporate service provider. Elevating business setup, compliance, and strategy in the UAE with world-class expertise.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="pt-4 flex flex-wrap gap-4"
                >
                  <button className="bg-white text-[#608A9F] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Start Your Journey
                  </button>
                  <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
                    Our Services
                  </button>
                </motion.div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
