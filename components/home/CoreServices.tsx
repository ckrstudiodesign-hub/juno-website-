"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Zap, Globe2, ArrowRight, Landmark, PlusCircle, FileCheck, Shield } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CoreServices = () => {
  const services = [
    {
      title: "Business Setup & Company Formation",
      desc: "Mainland and Free Zone setup coordination, jurisdiction assessment, and licence application support.",
      img: "/images/core_setup.jpg",
      link: "/mainland-company-formation-in-dubai",
      icon: <Building2 className="text-electric-sapphire mb-4" />
    },
    {
      title: "Free Zone Selection & Partner Facilitation",
      desc: "Compare suitable Free Zones, coordinate applications, and access our authorised channel partner networks.",
      img: "/images/core_freezone.jpg",
      link: "/dubai-free-zone-company-overview",
      icon: <Globe2 className="text-electric-sapphire mb-4" />
    },
    {
      title: "PRO, Visa & Immigration Support",
      desc: "Establishment coordination, investor/employee visa processing, Emirates ID, and government documentation.",
      img: "/images/core_pro.jpg",
      link: "/pro-services-dubai",
      icon: <FileCheck className="text-electric-sapphire mb-4" />
    },
    {
      title: "Corporate Banking Assistance",
      desc: "Bank selection guidance, account-opening documentation, application preparation, and follow-up support.",
      img: "/images/core_banking.jpg",
      link: "/bank-account-opening-dubai",
      icon: <Landmark className="text-electric-sapphire mb-4" />
    },
    {
      title: "Corporate Compliance & Ongoing Support",
      desc: "Juno BizHub supports businesses beyond incorporation by helping coordinate ongoing corporate administration, renewals, regulatory requirements and compliance processes throughout the business lifecycle.",
      img: "/images/core_compliance.jpg",
      link: "/services",
      icon: <Shield className="text-electric-sapphire mb-4" />
    },
    {
      title: "ACCOUNTING, VAT, TAX & AML COMPLIANCE",
      desc: "Bookkeeping, VAT/Corporate Tax registration, management reporting, and specialist referrals.",
      img: "/images/core_accounting.jpg",
      link: "/bookkeeping-and-accounting-services",
      icon: <PlusCircle className="text-electric-sapphire mb-4" />
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* ── Background Design ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-gradient-to-b from-[#e0f7fa]/60 via-[#e1f5fe]/40 to-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 119, 182, 0.04) 0px, rgba(0, 119, 182, 0.04) 1px, transparent 1px, transparent 16px)'
          }}
        />
        <div className="absolute top-[5%] md:top-[10%] inset-0 w-full flex items-center opacity-80">
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="whitespace-nowrap w-full"
            style={{ willChange: 'transform' }}
          >
            <span className="text-[20vw] font-black text-white drop-shadow-[0_20px_50px_rgba(0,119,182,0.12)] leading-none tracking-tighter uppercase pl-[10%]">
              EXPERTISE
            </span>
            <span className="text-[20vw] font-black text-white drop-shadow-[0_20px_50px_rgba(0,119,182,0.12)] leading-none tracking-tighter uppercase pl-[30%] hidden md:inline">
              EXPERTISE
            </span>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-sapphire/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
          <h2 className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-xs">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-black leading-tight">Choose Your Path to <br /><span className="text-electric-sapphire">UAE Success</span></h3>
          <p className="text-deep-navy/70 max-w-2xl mx-auto font-medium text-sm md:text-base">Explore our specialized business setup categories designed to meet diverse corporate requirements in the heart of the Emirates.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={item} className="group flex flex-col bg-gray-50 overflow-hidden rounded-[32px] md:rounded-[40px] border border-gray-100 hover:border-electric-sapphire/30 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700">
              <div className="h-48 md:h-60 relative overflow-hidden shrink-0">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>
              <div className="p-6 md:p-10 flex flex-col grow">
                <h4 className="text-xl md:text-2xl font-black text-deep-navy leading-tight mb-4 md:mb-6">{service.title}</h4>
                <p className="text-deep-navy/70 font-medium leading-relaxed text-sm md:text-base mb-6 md:mb-8 grow">
                  {service.desc}
                </p>
                <Link href={service.link} className="inline-flex items-center gap-2 md:gap-3 text-electric-sapphire font-black hover:gap-4 md:hover:gap-6 transition-all uppercase tracking-widest text-[10px] md:text-xs mt-auto">
                  Read Full Details <ArrowRight size={14} className="md:w-4 md:h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
