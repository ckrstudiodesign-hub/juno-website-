"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ParallaxImage from '@/components/motion/ParallaxImage';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

const shots = [
  {
    src: '/images/mainland_new.jpg',
    alt: 'Dubai mainland business district',
    label: 'Mainland',
    caption: 'Trade anywhere in the UAE from a DED licence.',
    href: '/mainland-company-formation-in-dubai',
    strength: 70,
  },
  {
    src: '/images/freezone_new.jpg',
    alt: 'UAE free zone commercial towers',
    label: 'Free Zone',
    caption: '100% ownership across the emirates’ leading zones.',
    href: '/dubai-free-zone-company-overview',
    strength: 90,
  },
  {
    src: '/images/offshore_new.jpg',
    alt: 'Offshore corporate structuring in the UAE',
    label: 'Offshore',
    caption: 'Holding structures built for cross-border trade.',
    href: '/offshore-company-formation-in-dubai',
    strength: 70,
  },
];

const PhotoShowcase = () => (
  <section className="section-padding relative overflow-hidden bg-white">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-14 md:mb-20">
        <span className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
          Where You Can Set Up
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-deep-navy leading-tight tracking-tighter uppercase max-w-3xl mx-auto">
          Three routes into the <span className="text-electric-sapphire">UAE market</span>.
        </h2>
      </Reveal>

      <Stagger className="grid gap-6 md:gap-8 md:grid-cols-3" stagger={0.14} amount={0.15}>
        {shots.map((shot) => (
          <StaggerItem key={shot.src}>
            <Link
              href={shot.href}
              className="group block relative rounded-[32px] overflow-hidden shadow-[0_24px_60px_-30px_rgba(3,4,94,0.5)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-3 hover:shadow-[0_40px_100px_-20px_rgba(0,119,182,0.4)] focus:outline-none focus-visible:ring-4 focus-visible:ring-electric-sapphire/40"
            >
              <ParallaxImage
                src={shot.src}
                alt={shot.alt}
                strength={shot.strength}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-[380px] md:h-[520px]"
                imageClassName="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.12]"
                overlay={
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                }
              />

              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2">
                <h3 className="text-white font-black uppercase tracking-tight text-xl md:text-2xl">
                  {shot.label}
                </h3>
                <p className="text-white/85 text-[13px] font-medium leading-snug mt-2 max-w-[26ch] transition-opacity duration-700 group-hover:text-white">
                  {shot.caption}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-[0.25em] text-white/80 group-hover:text-white group-hover:gap-4 transition-all duration-500">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default PhotoShowcase;
