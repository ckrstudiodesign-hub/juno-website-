"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, ShieldCheck, Download, FileBarChart, BookOpen, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function RecommendationsHub() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-sapphire/10 text-electric-sapphire font-black tracking-widest text-[10px] uppercase mb-6"
          >
             Resource Center
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-deep-navy tracking-tighter uppercase leading-none mb-6"
          >
            Corporate <span className="text-electric-sapphire">Excellence Hub</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-deep-navy/70 text-lg font-light max-w-2xl mx-auto"
          >
            Access our authoritative resources covering taxation, compliance, market insights, and essential downloads for your UAE business.
          </motion.p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tax Hub - Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 bg-deep-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-sapphire/20 to-transparent rounded-full transition-colors duration-700"></div>
             <Calculator className="w-12 h-12 text-electric-sapphire mb-6" />
             <h3 className="text-2xl font-black uppercase tracking-tight mb-4">UAE Tax Hub</h3>
             <p className="text-white/70 mb-8 max-w-md font-light leading-relaxed">
               Comprehensive guidance on VAT, Corporate Tax, Transfer Pricing, and tax registration requirements all in one authoritative section.
             </p>
             <Link href="/corporate-tax-uae" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-electric-sapphire hover:text-white transition-colors">
               Explore Tax Services <ArrowUpRight className="w-4 h-4" />
             </Link>
          </motion.div>

          {/* E-invoicing Readiness */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-electric-sapphire rounded-3xl p-8 text-white flex flex-col justify-between group hover:bg-[#009bc2] transition-colors duration-300"
          >
             <div>
               <FileBarChart className="w-10 h-10 mb-6 text-white/80" />
               <h3 className="text-xl font-black uppercase tracking-tight mb-3">E-Invoicing Readiness</h3>
               <p className="text-white/80 text-sm font-light leading-relaxed mb-6">
                 Prepare for the 2026-2027 UAE e-invoicing mandates. Ensure your financial systems are fully compliant ahead of time.
               </p>
             </div>
             <Link href="/bookkeeping-and-accounting-services" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-electric-sapphire transition-colors w-fit">
               Get Ready
             </Link>
          </motion.div>

          {/* AML & UBO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl group hover:border-electric-sapphire transition-colors"
          >
             <ShieldCheck className="w-10 h-10 mb-6 text-deep-navy group-hover:text-electric-sapphire transition-colors" />
             <h3 className="text-xl font-black text-deep-navy uppercase tracking-tight mb-3">AML & UBO Compliance</h3>
             <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
               Demonstrate compliance maturity and build lasting trust with serious founders, international banks, and global clients.
             </p>
             <Link href="/services" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-electric-sapphire hover:text-deep-navy transition-colors">
               View Compliance Services <ArrowUpRight className="w-4 h-4" />
             </Link>
          </motion.div>

          {/* Download Centre */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl group hover:border-electric-sapphire transition-colors"
          >
             <Download className="w-10 h-10 mb-6 text-deep-navy group-hover:text-electric-sapphire transition-colors" />
             <h3 className="text-xl font-black text-deep-navy uppercase tracking-tight mb-3">Download Centre</h3>
             <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
               Access essential resources including our 'Dubai Business Setup Document Checklist' and 'UAE Corporate Tax Readiness Checklist'.
             </p>
             <Link href="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-electric-sapphire hover:text-deep-navy transition-colors">
               Access Downloads <ArrowUpRight className="w-4 h-4" />
             </Link>
          </motion.div>

          {/* Insights & Case Studies - Combined split card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col sm:flex-row lg:flex-col"
          >
             <div className="flex-1 p-8 border-b sm:border-b-0 sm:border-r lg:border-r-0 lg:border-b border-gray-100 group hover:bg-gray-50 transition-colors">
                <BookOpen className="w-8 h-8 mb-4 text-electric-sapphire" />
                <h3 className="text-lg font-black text-deep-navy uppercase tracking-tight mb-2">Market Insights</h3>
                <p className="text-gray-500 text-xs font-light leading-relaxed mb-4">
                  Short, current articles based on official UAE sources to guide your strategy.
                </p>
                <Link href="/blog" className="inline-flex items-center gap-1 font-bold uppercase tracking-widest text-[10px] text-deep-navy hover:text-electric-sapphire transition-colors">
                  Read Articles <ArrowUpRight className="w-3 h-3" />
                </Link>
             </div>
             <div className="flex-1 p-8 group hover:bg-gray-50 transition-colors">
                <FileText className="w-8 h-8 mb-4 text-electric-sapphire" />
                <h3 className="text-lg font-black text-deep-navy uppercase tracking-tight mb-2">Client Case Studies</h3>
                <p className="text-gray-500 text-xs font-light leading-relaxed mb-4">
                  Explore real problem-to-outcome stories from successful founders.
                </p>
                <Link href="/about-us" className="inline-flex items-center gap-1 font-bold uppercase tracking-widest text-[10px] text-deep-navy hover:text-electric-sapphire transition-colors">
                  View Success Stories <ArrowUpRight className="w-3 h-3" />
                </Link>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
