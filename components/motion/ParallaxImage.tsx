"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** vertical travel in px across the full scroll pass; the image is oversized by this much on each edge */
  strength?: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** optional scrim rendered above the photo */
  overlay?: React.ReactNode;
}

/**
 * Photo that drifts against the scroll. The inner layer is inset by -strength on
 * the top and bottom, so translating by ±strength can never expose an edge.
 */
const ParallaxImage = ({
  src,
  alt,
  strength = 60,
  className = '',
  imageClassName = 'object-cover',
  sizes = '100vw',
  priority = false,
  overlay,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-x-0"
        style={{ top: -strength, bottom: -strength, y: reduce ? 0 : y }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} priority={priority} />
      </motion.div>
      {overlay}
    </div>
  );
};

export default ParallaxImage;
