"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

/** Words rise into place one after another, each masked by its own overflow box. */
const WordReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduce ? 0.008 : 0.026, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: reduce ? { opacity: 0 } : { opacity: 0, y: '0.9em' },
              visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0.2 : 0.5, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

interface Pillar {
  num: string;
  title: string;
  icon: typeof Target;
  quote: string;
  footnote?: string;
  offsetClass: string;
}

const pillars: Pillar[] = [
  {
    num: '01',
    title: 'Vision',
    icon: Target,
    quote:
      'To become a trusted UAE corporate services partner recognised for practical advice, transparent execution and long-term client relationships.',
    footnote: 'Where business formation meets banking excellence',
    offsetClass: '',
  },
  {
    num: '02',
    title: 'Mission',
    icon: Eye,
    quote:
      'To simplify business establishment and corporate administration by combining local knowledge, structured processes and responsive client service.',
    offsetClass: 'lg:mt-20',
  },
];

const PillarCard = ({ pillar, index }: { pillar: Pillar; index: number }) => {
  const Icon = pillar.icon;
  const reduce = useReducedMotion();
  const rect = useRef<DOMRect | null>(null);

  // Pointer spotlight. The rect is cached on enter so pointermove never forces a
  // layout read, and the light is positioned with transform only.
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 220, damping: 28, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 220, damping: 28, mass: 0.4 });

  return (
    <Reveal
      direction={index === 0 ? 'right' : 'left'}
      delay={index * 0.1}
      distance={44}
      className={pillar.offsetClass}
    >
      <div
        onPointerEnter={(e) => { rect.current = e.currentTarget.getBoundingClientRect(); }}
        onPointerMove={(e) => {
          if (reduce || !rect.current) return;
          mx.set(e.clientX - rect.current.left);
          my.set(e.clientY - rect.current.top);
        }}
        onPointerLeave={() => { mx.set(-600); my.set(-600); }}
        className="group relative rounded-[40px] p-[1.5px] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-2"
      >
        {/* Conic sweep around the border. Paused until hover, so it costs nothing at rest. */}
        <div
          aria-hidden
          className="juno-sweep absolute inset-[-130%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, #00B4D8 40deg, #0077B6 75deg, transparent 115deg)',
            willChange: 'transform',
          }}
        />

        <div className="relative rounded-[39px] bg-white/90 border border-deep-navy/[0.07] overflow-hidden h-full shadow-[0_18px_50px_-30px_rgba(3,4,94,0.4)]">
          {/* Spotlight following the cursor */}
          <motion.div
            aria-hidden
            style={{ x: sx, y: sy, willChange: 'transform' }}
            className="absolute -left-48 -top-48 w-96 h-96 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              className="w-full h-full rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,180,216,0.18) 0%, rgba(0,180,216,0) 68%)' }}
            />
          </motion.div>

          {/* Ghost numeral */}
          <span
            aria-hidden
            className="absolute -top-8 right-3 text-[9rem] md:text-[12rem] font-black leading-none text-deep-navy/[0.04] select-none pointer-events-none tracking-tighter"
          >
            {pillar.num}
          </span>

          <div className="relative p-9 md:p-14">
            <h3 className="text-3xl md:text-4xl font-black mb-7 text-deep-navy tracking-tight">
              Our <span className="text-electric-sapphire">{pillar.title}</span>
            </h3>

            <div className="text-lg md:text-xl text-deep-navy/75 font-light leading-relaxed">
              <span className="text-electric-sapphire/40 text-3xl leading-none align-top mr-0.5">&ldquo;</span>
              <WordReveal text={pillar.quote} delay={0.08} />
              <span className="text-electric-sapphire/40 text-3xl leading-none align-top">&rdquo;</span>
            </div>

            {pillar.footnote && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-9 pt-7 border-t border-deep-navy/10"
              >
                <p className="text-electric-sapphire font-black uppercase tracking-[0.2em] text-[10px]">
                  {pillar.footnote}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const VisionMission = () => (
  <section className="relative section-padding overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <Reveal className="text-center mb-14 md:mb-20">
        <span className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
          What Drives Us
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-deep-navy leading-tight tracking-tighter uppercase max-w-2xl mx-auto">
          The standard we hold <span className="text-electric-sapphire">ourselves to</span>.
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {pillars.map((pillar, i) => (
          <PillarCard key={pillar.num} pillar={pillar} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default VisionMission;
