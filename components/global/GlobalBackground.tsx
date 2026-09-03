"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Ambient page background.
 *
 * Perf notes — this layer is fixed and full-viewport, so it costs something on
 * every frame of every page. Deliberate choices:
 *   - Colour fields are radial-gradients, NOT blurred divs. `filter: blur(150px)`
 *     on a half-viewport element forces a huge offscreen rasterisation whenever
 *     it changes; a gradient costs nothing.
 *   - No `mix-blend-mode` — blending pulls the element off the fast compositing
 *     path and forces a backdrop readback every frame.
 *   - Only `transform` and `opacity` animate. Those are the two properties the
 *     compositor can run without touching the main thread.
 *   - The dot grid is static. Animating `background-position` repaints the whole
 *     layer every frame and can never be composited.
 */
const GlobalBackground = () => {
  const reduce = useReducedMotion();

  const drift = (x: number[], y: number[], scale: number[], duration: number, delay = 0) =>
    reduce
      ? {}
      : {
          animate: { x, y, scale },
          transition: { duration, repeat: Infinity, ease: 'easeInOut' as const, delay },
        };

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#F4FCFF]">
      {/* Static dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#0077B6 1.5px, transparent 1.5px)',
          backgroundSize: '42px 42px',
          maskImage: 'radial-gradient(ellipse at center, black 15%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 15%, transparent 78%)',
        }}
      />

      {/* Ocean water fluid blobs */}
      <motion.div
        {...drift([0, 80, 0], [0, -60, 0], [1, 1.2, 1], 25)}
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(144,224,239,0.3) 0%, rgba(144,224,239,0.1) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      <motion.div
        {...drift([-40, 40, -40], [40, -40, 40], [1, 1.1, 1], 30, 2)}
        className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(0,180,216,0.25) 0%, rgba(0,180,216,0.08) 50%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      <motion.div
        {...drift([30, -50, 30], [-30, 50, -30], [1, 1.3, 1], 20, 5)}
        className="absolute top-[20%] right-[10%] w-[60%] h-[60%] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(0,119,182,0.15) 0%, rgba(0,119,182,0.05) 50%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      <motion.div
        {...drift([-60, 0, -60], [20, -80, 20], [1.1, 1, 1.1], 35, 1)}
        className="absolute bottom-[10%] left-[10%] w-[90%] h-[70%] rounded-[100%] opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(202,240,248,0.4) 0%, rgba(202,240,248,0.1) 60%, transparent 80%)',
          willChange: 'transform',
        }}
      />

      {/* Seamless Ocean Waves */}
      <div className="absolute inset-x-0 bottom-0 h-[25vh] overflow-hidden opacity-30">
        <motion.div
          animate={reduce ? undefined : { x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-[200%] h-full flex"
          style={{ willChange: 'transform' }}
        >
          {/* SVG Wave layer 1 (Fast, Foreground) */}
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00B4D8" d="M0,220 Q360,140 720,220 T1440,220 L1440,320 L0,320 Z"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00B4D8" d="M0,220 Q360,140 720,220 T1440,220 L1440,320 L0,320 Z"></path>
          </svg>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[35vh] overflow-hidden opacity-20">
        <motion.div
          animate={reduce ? undefined : { x: ['-50%', '0%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-[200%] h-full flex"
          style={{ willChange: 'transform' }}
        >
          {/* SVG Wave layer 2 (Medium, Middle) */}
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#90E0EF" d="M0,180 Q360,260 720,180 T1440,180 L1440,320 L0,320 Z"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#90E0EF" d="M0,180 Q360,260 720,180 T1440,180 L1440,320 L0,320 Z"></path>
          </svg>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden opacity-10">
        <motion.div
          animate={reduce ? undefined : { x: ['0%', '-50%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-[200%] h-full flex"
          style={{ willChange: 'transform' }}
        >
          {/* SVG Wave layer 3 (Slow, Background) */}
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0077B6" d="M0,120 Q360,40 720,120 T1440,120 L1440,320 L0,320 Z"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0077B6" d="M0,120 Q360,40 720,120 T1440,120 L1440,320 L0,320 Z"></path>
          </svg>
        </motion.div>
      </div>

      {/* Drifting watermark — transform-only, promoted to its own layer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70 select-none overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={reduce ? undefined : { x: ['15%', '-115%'] }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          <span 
            className="text-[160px] md:text-[260px] lg:text-[340px] font-sans font-black tracking-tighter text-[#0077B6]/10 leading-none"
            style={{ textShadow: '0 20px 40px rgba(0, 119, 182, 0.05), 0 4px 12px rgba(0, 119, 182, 0.02)' }}
          >
            JUNO BIZHUB CORPORATE
          </span>
        </motion.div>
      </div>

      {/* Diagonal hairlines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #0077B6 0, #0077B6 1px, transparent 0, transparent 50%)',
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
};

export default GlobalBackground;
