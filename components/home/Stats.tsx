"use client";

import React, { useEffect, useRef } from 'react';
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { Briefcase, Users, BarChart3, Award } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  { label: 'Successful Setups', value: 1000, suffix: '+', icon: <Briefcase size={22} /> },
  { label: 'Expert Advisors', value: 25, suffix: '+', icon: <Users size={22} /> },
  { label: 'Business Activities', value: 2000, suffix: '+', icon: <BarChart3 size={22} /> },
  { label: 'Client Satisfaction', value: 100, suffix: '%', icon: <Award size={22} /> },
];

/**
 * Counts up when scrolled into view. `tabular-nums` is load-bearing — without it
 * the digits change width mid-count and the whole row jitters.
 */
const CountUp = ({ value, suffix, delay }: { value: number; suffix: string; delay: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  // Seeded with the FINAL value, not 0. If the observer never fires, rAF is
  // throttled, or JS fails after SSR, the correct figure is what's on screen —
  // a stat stuck at "0+" is worse than no animation at all. The count is reset
  // to 0 only at the moment we know the animation is actually starting.
  const count = useMotionValue(value);
  const display = useTransform(count, (latest) => Math.round(latest).toLocaleString('en-US'));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(value);
      return;
    }
    count.set(0);
    const controls = animate(count, value, { duration: 1.9, delay, ease: EASE });
    return () => controls.stop();
  }, [inView, value, reduce, count, delay]);

  return (
    // The accessible name is the final figure; the ticking digits are decorative.
    <span ref={ref} aria-label={`${value.toLocaleString('en-US')}${suffix}`} className="tabular-nums">
      <motion.span aria-hidden>{display}</motion.span>
      <span aria-hidden>{suffix}</span>
    </span>
  );
};

const Stats = () => {
  // TODO: Verify exact metrics internally before publication
  return null;
};

export default Stats;
