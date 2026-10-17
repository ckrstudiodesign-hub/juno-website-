"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe2, Briefcase, FileSignature, Landmark, ArrowRight, Orbit, Ship, Compass } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  href: string;
  links: { label: string; href: string }[];
  orbit: 0 | 1;
  angle: number;
  big?: boolean;
  bgImage: string;
};

const ORBITS = [
  { radius: 'var(--orbit-inner)', duration: 32 },
  { radius: 'var(--orbit-outer)', duration: 52 },
];

const services: Service[] = [
  {
    id: 'mainland',
    title: 'Mainland Formation',
    icon: Building2,
    description: 'Launch in the UAE mainland with full ownership and direct access to the local market.',
    href: '/mainland-company-formation-in-dubai',
    orbit: 0,
    angle: -72,
    big: true,
    bgImage: '/images/mainland_new.jpg',
    links: [
      { label: 'Mainland Company', href: '/mainland-company-formation-in-dubai' },
      { label: 'PJSC Formation', href: '/services' },
      { label: 'Professional License', href: '/professional-license-main-land-civil-company' },
      { label: 'Branch Office', href: '/branch-representative-office-in-main-land' },
      { label: 'Public Listing', href: '/services' },
      { label: 'Sub-Authority Permissions', href: '/services' },
    ],
  },
  {
    id: 'freezone',
    title: 'Free Zone Setup',
    icon: Globe2,
    description: 'Tax exemptions and 100% foreign ownership across the UAE’s premier free zones.',
    href: '/dubai-free-zone-company-overview',
    orbit: 0,
    angle: 108,
    big: true,
    bgImage: '/images/freezone_new.jpg',
    links: [
      { label: 'SHAMS', href: '/sharjah-media-city-free-zone-business-setup' },
      { label: 'RAKEZ', href: '/rakez-company-formation' },
      { label: 'Fujairah FZ', href: '/fujairah-free-zone-company-formation' },
      { label: 'Ajman FZ', href: '/ajman-free-zone-business-setup' },
      { label: 'ADGM — Abu Dhabi', href: '/services' },
      { label: 'IFZA', href: '/ifza-dubai-business-set-up' },
      { label: 'SPC', href: '/spc-free-zone-setup' },
      { label: 'JAFZA', href: '/jafza-company-formation' },
      { label: 'DAFZA', href: '/business-setup-in-dafza' },
      { label: 'Dubai South', href: '/dubai-south-free-zone-business-setup' },
      { label: 'Over 50 Other Free Zones', href: '/dubai-free-zone-company-overview' },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Services',
    icon: Briefcase,
    description: 'Licence renewals, document updates, shareholder changes, UBO coordination, and administrative assistance.',
    href: '/services',
    orbit: 1,
    angle: 18,
    bgImage: '/images/core_compliance.jpg',
    links: [
      { label: 'License Renewals', href: '/services' },
      { label: 'UBO Coordination', href: '/services' },
      { label: 'Shareholder Changes', href: '/services' },
      { label: 'Document Updates', href: '/services' },
      { label: 'Administrative Assistance', href: '/services' },
      { label: 'PRO Services', href: '/pro-services-dubai' },
      { label: 'Legal Translation', href: '/legal-translation-dubai' },
      { label: 'AML Compliance', href: '/services' },
      { label: 'Business Advisory', href: '/services' },
    ],
  },
  {
    id: 'residency',
    title: 'Residency & Visas',
    icon: FileSignature,
    description: 'Golden Visas, residency permits and attestation for you, your family and your team.',
    href: '/golden-visa-uae',
    orbit: 1,
    angle: 142,
    bgImage: '/images/core_pro.jpg',
    links: [
      { label: 'Freelancer Visa', href: '/services' },
      { label: 'Golden Visa', href: '/golden-visa-uae' },
      { label: 'Investor Visa', href: '/services' },
      { label: 'Employee Visa', href: '/services' },
      { label: 'UAE Wills', href: '/uae-wills-service' },
      { label: 'Document Attestation', href: '/document-attestation-services' },
    ],
  },
  {
    id: 'banking',
    title: 'Banking Solutions',
    icon: Landmark,
    description: 'Direct bank relationships that turn account opening from a bottleneck into a step.',
    href: '/bank-account-opening-dubai',
    orbit: 1,
    angle: 262,
    bgImage: '/images/core_banking.jpg',
    links: [
      { label: 'Corporate Banking Assistance', href: '/bank-account-opening-dubai' },
      { label: 'Personal Banking', href: '/personal-bank-account-services' },
      { label: 'Offshore Accounts', href: '/offshore-banking-services' },
      { label: 'Trade Finance', href: '/trade-finance-services' },
      { label: 'Emirates Islamic Bank', href: '/services' },
      { label: 'RAK Bank', href: '/services' },
      { label: 'HSBC UAE', href: '/services' },
      { label: 'Standard Chartered', href: '/services' },
    ],
  },
  {
    id: 'offshore',
    title: 'Offshore Company',
    icon: Ship,
    description: 'Establish your business offshore with full confidentiality and asset protection.',
    href: '/offshore-company-formation-in-dubai',
    orbit: 0,
    angle: 228,
    bgImage: '/images/mainland_new.jpg',
    links: [
      { label: 'Offshore Setup', href: '/offshore-company-formation-in-dubai' },
      { label: 'JAFZA Offshore', href: '/jafza-offshore-company-setup' },
      { label: 'RAK Offshore', href: '/rak-offshore-company-formation' },
      { label: 'Ajman Offshore', href: '/ajman-offshore-company-setup' },
    ],
  },
  {
    id: 'advisory',
    title: 'Strategic Business Advisory',
    icon: Compass,
    description: 'Expert guidance for scaling, restructuring, and long-term corporate strategy in the UAE.',
    href: '/services',
    orbit: 1,
    angle: 350,
    bgImage: '/images/core_compliance.jpg',
    links: [
      { label: 'Business Strategy', href: '/services' },
      { label: 'Market Entry', href: '/services' },
      { label: 'Restructuring', href: '/services' },
    ],
  },
];

const asteroids = [
  { orbit: 0 as const, angle: 24, size: 7 },
  { orbit: 0 as const, angle: 208, size: 5 },
  { orbit: 1 as const, angle: 82, size: 6 },
  { orbit: 1 as const, angle: 196, size: 9 },
  { orbit: 1 as const, angle: 320, size: 5 },
];

const orbitTransform = (angle: number, radius: string) =>
  `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}) rotate(${-angle}deg)`;

const ServicesOrbit = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const active = services.find((s) => s.id === activeId) ?? null;
  const paused = isHovered;
  const playState = paused ? 'paused' : 'running';

  // Auto-cycle every 5 seconds
  useEffect(() => {
    if (isHovered) return; // Pause auto-cycling when user is interacting

    const intervalId = setInterval(() => {
      setActiveId((currentId) => {
        if (!currentId) return services[0].id;
        const currentIndex = services.findIndex(s => s.id === currentId);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <section className="pt-10 md:pt-16 pb-4 md:pb-8 relative overflow-hidden bg-white" id="our-services">
      {/* ── Dynamic Image Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <AnimatePresence mode="popLayout">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img src={active.bgImage} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Softening overlays to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white pointer-events-none" />
      </div>

      {/* ── Graphic Overlays (Diagonal + SERVICES) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-gradient-to-b from-[#e0f7fa]/40 via-[#e1f5fe]/20 to-transparent">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 119, 182, 0.04) 0px, rgba(0, 119, 182, 0.04) 1px, transparent 1px, transparent 16px)'
          }}
        />
        <div className="hidden md:flex absolute top-[10%] md:top-[15%] inset-0 w-full items-center opacity-30">
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="whitespace-nowrap w-full"
            style={{ willChange: 'transform' }}
          >
            <span className="text-[22vw] font-black text-white drop-shadow-[0_20px_50px_rgba(0,119,182,0.12)] leading-none tracking-tighter uppercase pl-[10%]">
              SERVICES
            </span>
            <span className="text-[22vw] font-black text-white drop-shadow-[0_20px_50px_rgba(0,119,182,0.12)] leading-none tracking-tighter uppercase pl-[30%] hidden md:inline">
              SERVICES
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* ── Header ── */}
          <div className="text-center max-w-4xl mx-auto mb-0 md:mb-2 z-20 relative">
            <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#0077B6]/10 border border-[#0077B6]/20 text-[#0077B6] font-black tracking-[0.2em] uppercase text-xs mb-6 shadow-sm">
              Our Services
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tighter uppercase">
              Tailored corporate solutions designed to navigate the complexities of the <span className="text-[#0077B6]">UAE market</span>.
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-medium mt-6 max-w-2xl mx-auto">
              From inception to expansion, we are your strategic partners.
            </p>
          </div>

          {/* ── Solar System & Details ── */}
          <div className="flex flex-col items-center w-full mt-8 md:mt-12">
            {/* Solar system (Scaled down to make it smaller) */}
            <div className="flex justify-center transform scale-[0.7] sm:scale-[0.8] origin-center mb-8 md:mb-12">
              <div
                className="juno-solar relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setActiveId(null);
                }}
              >
                {/* Large Background Highlight Glow for the whole system */}
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 rounded-full pointer-events-none mix-blend-multiply"
                  style={{
                    width: `calc(var(--orbit-outer) * 2.8)`,
                    height: `calc(var(--orbit-outer) * 2.8)`,
                    marginLeft: `calc(var(--orbit-outer) * -1.4)`,
                    marginTop: `calc(var(--orbit-outer) * -1.4)`,
                    background: 'radial-gradient(circle, rgba(0,119,182,0.06) 0%, rgba(0,119,182,0.02) 50%, transparent 70%)',
                  }}
                />

                {/* Static orbit rings */}
                {ORBITS.map((ring, i) => {
                  const isLit = active?.orbit === i;
                  return (
                    <div
                      key={`ring-${i}`}
                      aria-hidden
                      className="absolute left-1/2 top-1/2 rounded-full border transition-colors duration-500"
                      style={{
                        width: `calc(${ring.radius} * 2)`,
                        height: `calc(${ring.radius} * 2)`,
                        marginLeft: `calc(${ring.radius} * -1)`,
                        marginTop: `calc(${ring.radius} * -1)`,
                        borderColor: isLit ? 'rgba(0,119,182,0.5)' : 'rgba(0,0,0,0.1)',
                        borderWidth: isLit ? '2px' : '1px',
                      }}
                    />
                  );
                })}

                {/* The sun — content panel */}
                <div
                  className="absolute left-1/2 top-1/2 rounded-full flex items-center justify-center text-center px-4 md:px-7 border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-10"
                  style={{
                    width: 'var(--sun)',
                    height: 'var(--sun)',
                    marginLeft: `calc(var(--sun) * -0.5)`,
                    marginTop: `calc(var(--sun) * -0.5)`,
                  }}
                >
                  <AnimatePresence mode="wait">
                    {active ? (
                      <motion.div
                        key={active.id}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="flex flex-col items-center"
                      >
                        <active.icon className="w-5 h-5 md:w-6 md:h-6 text-[#0077B6] md:mb-2" />
                        <h3 className="hidden md:block text-[13px] lg:text-[15px] font-black uppercase tracking-tight text-gray-900 leading-tight">
                          {active.title}
                        </h3>
                        <p className="hidden lg:block text-gray-500 text-[11px] font-medium leading-snug mt-2">
                          {active.description}
                        </p>
                        <Link
                          href={active.href}
                          className="hidden md:inline-flex items-center gap-1.5 mt-2.5 lg:mt-3 text-[#0077B6] font-bold uppercase tracking-widest text-[9px] hover:gap-3 transition-all"
                        >
                          Explore <ArrowRight className="w-3 h-3" />
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="flex flex-col items-center"
                      >
                        <Orbit className="w-5 h-5 md:w-6 md:h-6 text-[#0077B6] md:mb-2 animate-slow-spin" />
                        <h3 className="hidden md:block text-[13px] lg:text-[15px] font-black uppercase tracking-tight text-gray-900 leading-tight">
                          Our core services
                        </h3>
                        <p className="hidden lg:block text-gray-500 text-[11px] font-medium leading-snug mt-2">
                          One partner for the full lifecycle of your UAE company.
                        </p>
                        <span className="hidden md:block text-[#0077B6] text-[9px] font-bold uppercase tracking-[0.25em] mt-2.5 animate-pulse">
                          Hover a planet
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Rotating rings carrying the planets */}
                {ORBITS.map((ring, ringIndex) => {
                  const spin: React.CSSProperties = {
                    animation: `juno-orbit ${ring.duration}s linear infinite`,
                    animationPlayState: playState,
                  };
                  const counterSpin: React.CSSProperties = {
                    animation: `juno-orbit-reverse ${ring.duration}s linear infinite`,
                    animationPlayState: playState,
                  };

                  return (
                    <div
                      key={`orbit-${ringIndex}`}
                      data-orbit
                      className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
                      style={{
                        width: `calc(${ring.radius} * 2)`,
                        height: `calc(${ring.radius} * 2)`,
                        marginLeft: `calc(${ring.radius} * -1)`,
                        marginTop: `calc(${ring.radius} * -1)`,
                        ...spin,
                      }}
                    >
                      {asteroids
                        .filter((a) => a.orbit === ringIndex)
                        .map((a, i) => (
                           <div
                            key={`asteroid-${ringIndex}-${i}`}
                            aria-hidden
                            className="absolute left-1/2 top-1/2 rounded-full bg-black/15"
                            style={{
                              width: a.size,
                              height: a.size,
                              transform: orbitTransform(a.angle, ring.radius),
                            }}
                          />
                        ))}

                      {services
                        .filter((s) => s.orbit === ringIndex)
                        .map((service) => {
                          const Icon = service.icon;
                          const isActive = activeId === service.id;

                          return (
                            <div
                              key={service.id}
                              className="absolute left-1/2 top-1/2 pointer-events-auto"
                              style={{
                                width: service.big ? 'var(--planet-lg)' : 'var(--planet)',
                                height: service.big ? 'var(--planet-lg)' : 'var(--planet)',
                                transform: orbitTransform(service.angle, ring.radius),
                              }}
                            >
                              <div data-counter className="relative w-full h-full" style={counterSpin}>
                                <button
                                  type="button"
                                  aria-pressed={isActive}
                                  onMouseEnter={() => setActiveId(service.id)}
                                  onFocus={() => setActiveId(service.id)}
                                  onClick={() => setActiveId(isActive ? null : service.id)}
                                  className={`group w-full h-full rounded-full flex items-center justify-center transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-[#0077B6]/40 ${
                                    isActive
                                      ? 'bg-gradient-to-br from-[#00B4D8] to-[#0077B6] scale-110 shadow-[0_10px_20px_rgba(0,119,182,0.4)]'
                                      : 'bg-white border border-black/10 hover:border-[#0077B6] shadow-[0_6px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,119,182,0.15)]'
                                  }`}
                                >
                                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors ${isActive ? 'text-white' : 'text-[#0077B6]'}`} />
                                  <span className="sr-only">{service.title}</span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Detail strip under the system ── */}
            <div className="mt-4 md:mt-8 min-h-[84px] md:min-h-[96px] flex items-start justify-center relative z-20 w-full px-4">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="max-w-2xl text-center"
                  >
                    <div className="lg:hidden mb-5">
                      <h3 className="md:hidden text-[17px] font-black uppercase tracking-tight text-deep-navy mb-2">
                        {active.title}
                      </h3>
                      <p className="text-deep-navy/70 text-xs md:text-[13px] font-medium leading-relaxed max-w-sm mx-auto">
                        {active.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {active.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-electric-sapphire/20 bg-white/70 backdrop-blur-sm text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-deep-navy hover:text-white hover:bg-electric-sapphire hover:border-electric-sapphire transition-all shadow-sm"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={active.href}
                      className="md:hidden inline-flex items-center gap-2 mt-5 text-electric-sapphire font-black uppercase tracking-widest text-[10px]"
                    >
                      Explore Category <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle-strip"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <p className="text-gray-500 text-[13px] md:text-[14px] font-medium max-w-lg mx-auto">
                      Mainland, free zone, corporate compliance, residency and banking &mdash; explore the orbit above, or
                      {' '}
                      <Link href="/services" className="text-[#0077B6] font-bold hover:text-[#005f92] hover:underline transition-colors">
                        browse every service
                      </Link>
                      .
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOrbit;
