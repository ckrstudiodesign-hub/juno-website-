"use client";

import React from 'react';
import Image from 'next/image';

interface Partner {
  name: string;
  src: string;
  /** per-logo optical sizing — some marks read much smaller at the same box height */
  scale?: string;
}

const partners: Partner[] = [
  { name: 'JAFZA', src: '/Partners/JAFZA_Logo.png' },
  { name: 'Meydan Free Zone', src: '/Partners/Meydan_Free_Zone_Logo.png' },
  { name: 'RAKEZ', src: '/Partners/RAKEZ_Logo.png' },
  { name: 'DMCC', src: '/Partners/dmcc.png' },
  { name: 'IFZA', src: '/Partners/ifza-logo.png', scale: 'scale-[1.3] md:scale-[1.5]' },
  { name: 'SPC Free Zone', src: '/Partners/spc.png', scale: 'scale-[1.3] md:scale-[1.5]' },
];

/** Second row starts from a different partner so the two rows never mirror each other. */
const rowB = [...partners.slice(3), ...partners.slice(0, 3)];

const LogoCard = ({ partner }: { partner: Partner }) => (
  <div className="shrink-0 mx-2.5 md:mx-3">
    <div className="w-[150px] h-[84px] md:w-[190px] md:h-[104px] rounded-2xl bg-white border border-deep-navy/[0.07] shadow-[0_2px_10px_-4px_rgba(3,4,94,0.10)] flex items-center justify-center px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-12px_rgba(3,4,94,0.22)] hover:border-electric-sapphire/30">
      <Image
        src={partner.src}
        alt={partner.name}
        width={200}
        height={100}
        className={`object-contain max-h-9 md:max-h-11 w-auto ${partner.scale || ''}`}
      />
    </div>
  </div>
);

/**
 * Each copy repeats the set twice AND is floored at 100vw. The repeat keeps the
 * spacing natural on normal displays; the 100vw floor is what stops a blank gap
 * opening on ultrawide screens, where one pass of six cards is narrower than the
 * viewport and the track runs out of content mid-cycle.
 */
const Row = ({
  items,
  reverse = false,
  duration,
}: {
  items: Partner[];
  reverse?: boolean;
  duration: string;
}) => (
  <div className="relative flex overflow-hidden group">
    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-28 z-10 bg-gradient-to-r from-[#F6F8FB] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-28 z-10 bg-gradient-to-l from-[#F6F8FB] to-transparent" />

    <div
      className={`${reverse ? 'juno-marquee-reverse' : 'juno-marquee'} flex w-max`}
      style={{ ['--marquee-duration' as string]: duration }}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 items-center min-w-[100vw] justify-around"
          aria-hidden={copy === 1}
        >
          {[...items, ...items].map((partner, i) => (
            <LogoCard key={`${copy}-${i}-${partner.name}`} partner={partner} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const PartnersMarquee = () => (
  <section className="py-16 md:py-20 bg-[#F6F8FB] border-y border-deep-navy/[0.05] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 mb-10 md:mb-12 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-deep-navy tracking-tight">
        Our Trusted Partners
      </h2>
      <div className="mt-4 mx-auto w-16 h-[3px] rounded-full bg-electric-sapphire" />
    </div>

    <div className="space-y-4 md:space-y-5">
      <Row items={partners} duration="46s" />
      <Row items={rowB} duration="52s" reverse />
    </div>
  </section>
);

export default PartnersMarquee;
