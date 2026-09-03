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

const Stats = () => (
  <section className="relative overflow-hidden py-16 md:py-24">
    {/* Every stop is dark enough that white copy clears 4.5:1. The cyan bloom is
        deliberately weak — at its original strength it lifted the top-left to
        4.13:1 and failed the small labels. */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0074B0] via-[#006CA3] to-[#00486E]" />
    <div
      aria-hidden
      className="absolute inset-0 opacity-35"
      style={{
        background:
          'radial-gradient(ellipse at 20% 0%, rgba(0,180,216,0.30) 0%, rgba(0,180,216,0) 55%), radial-gradient(ellipse at 85% 100%, rgba(3,4,94,0.55) 0%, rgba(3,4,94,0) 55%)',
      }}
    />
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 lg:gap-0"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: { opacity: 0, y: 26 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className={`group relative text-center px-4 lg:px-8 ${
              idx > 0 ? 'lg:border-l lg:border-white/15' : ''
            }`}
          >
            <div className="flex justify-center mb-5">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                {stat.icon}
              </div>
            </div>

            <div className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
              <CountUp value={stat.value} suffix={stat.suffix} delay={idx * 0.09} />
            </div>

            <div className="text-white font-black tracking-[0.2em] uppercase text-[10px] md:text-[11px]">
              {stat.label}
            </div>

            {/* Rule draws itself in, then extends on hover */}
            <motion.div
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.35, ease: EASE } },
              }}
              className="mt-5 mx-auto h-[3px] w-12 origin-center rounded-full bg-white/35 transition-all duration-500 group-hover:w-20 group-hover:bg-white"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Stats;
