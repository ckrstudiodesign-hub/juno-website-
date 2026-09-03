"use client";

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up': return { y: distance };
    case 'down': return { y: -distance };
    case 'left': return { x: distance };
    case 'right': return { x: -distance };
    default: return {};
  }
};

// Soft "ease-out-expo"-ish curve — decelerates late, which is what reads as smooth.
const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  distance?: number;
  duration?: number;
  /** how much of the element must be visible before it fires */
  amount?: number;
  once?: boolean;
  className?: string;
}

/**
 * Scroll-reveal wrapper. Under prefers-reduced-motion it degrades to a plain
 * fade with no travel, rather than being disabled entirely — content still
 * announces itself without anything sliding around.
 */
export const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  distance = 32,
  duration = 0.7,
  amount = 0.2,
  once = true,
  className,
}: RevealProps) => {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offsetFor(direction, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduce ? 0.25 : duration, delay, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
};

/** Parent that walks its RevealItem children in one after another. */
export const Stagger = ({
  children,
  stagger = 0.12,
  delayChildren = 0,
  amount = 0.2,
  once = true,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduce ? 0.04 : stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  direction = 'up',
  distance = 28,
  duration = 0.65,
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offsetFor(direction, distance) },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: reduce ? 0.25 : duration, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
