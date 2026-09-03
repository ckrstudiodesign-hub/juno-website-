"use client";

import React from 'react';

const services = [
  'Business Setup',
  'Free Zone & Mainland',
  'Visa & PRO Services',
  'Corporate Banking',
  'Corporate Compliance',
  'Accounting & Tax',
];

/**
 * Seamless horizontal loop.
 *
 * Two identical copies sit in a `w-max` track that slides exactly -50%, so the
 * seam never shows. Each copy is forced to at least 100vw — otherwise, once the
 * track has travelled one copy's width, there is nothing left to fill the
 * viewport and a blank gap opens on the right.
 */
const ServicesTicker = () => (
  <section className="relative w-full overflow-hidden group py-6 md:py-8 bg-white">
    {/* Hairline borders */}
    <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />

    {/* The marquee wrapper */}
    <div className="relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="juno-marquee flex w-max" style={{ ['--marquee-duration' as string]: '40s' }}>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center min-w-[100vw] justify-around"
            aria-hidden={copy === 1}
          >
            {services.map((service, i) => (
              <div key={`${copy}-${service}`} className="flex shrink-0 items-center px-8 md:px-12">
                <span
                  className={`text-3xl md:text-4xl font-black uppercase tracking-tight whitespace-nowrap transition-all duration-700 hover:scale-105 cursor-default ${
                    i % 2 === 0
                      ? 'text-black'
                      : 'text-transparent'
                  }`}
                  style={i % 2 !== 0 ? { WebkitTextStroke: '1px black' } : {}}
                >
                  {service}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesTicker;
