"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin reading-progress bar pinned to the top of the viewport.
 * The spring is what makes it feel smooth rather than twitchy.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[200] bg-gradient-to-r from-electric-sapphire via-cornflower-blue to-electric-sapphire pointer-events-none"
    />
  );
};

export default ScrollProgress;
