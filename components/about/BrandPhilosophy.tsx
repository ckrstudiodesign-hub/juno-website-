"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target } from 'lucide-react';

const BrandPhilosophy = () => {
  return (
    <section className="section-padding bg-[#03045E] text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Short Version immediately below Mission & Vision */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-[#00B4D8] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Tagline</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Seamless Setup. Sustained Success.</h2>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-6 italic">
            "You focus on scaling your business; we handle the foundation that keeps it standing."
          </p>
          <p className="text-lg text-white/80 font-light leading-relaxed">
            With Juno BizHub, you don't just purchase a trade license—you gain a dedicated team committed to protecting your compliance, streamlining your operations, and backing your vision every step of the way.
          </p>
        </div>

        {/* Detailed Philosophy */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[#00B4D8] font-bold tracking-[0.3em] uppercase text-sm">Our Brand Philosophy</span>
            <h3 className="text-4xl font-black leading-tight">Integrity, Excellence, Partnership, Innovation.</h3>
            <p className="text-white/80 font-light leading-relaxed text-lg">
              A business setup in the UAE should mark the beginning of an ambitious growth journey—not an exhausting cycle of administrative hurdles.
            </p>
            <p className="text-white/80 font-light leading-relaxed text-lg">
              Our philosophy is the foundation of our operational promise to every entrepreneur, investor, and enterprise we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[#00B4D8] font-bold tracking-[0.2em] uppercase text-xs">The Story Behind Our Tagline</span>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                   <Target className="text-[#00B4D8]" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Integrity & Excellence</h4>
                  <p className="text-white/70 font-light leading-relaxed">
                    Starting a company involves complex regulatory layers across government bodies, free zones, and licensing authorities. We eliminate the friction through transparency and high standards. By taking complete ownership of filings, approvals, legal drafting, and PRO processes, we turn what is typically a bureaucratic trial into a fast, transparent, and effortless experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                   <Lightbulb className="text-[#00B4D8]" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Partnership & Innovation</h4>
                  <p className="text-white/70 font-light leading-relaxed">
                    Issuing a trade license is only day one. True success requires staying compliant, avoiding costly regulatory penalties, managing corporate tax and VAT, and maintaining smooth operational continuity. We stay by your side through every renewal, expansion, visa cycle, and compliance requirement—ensuring your foundation remains rock-solid as you scale with innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandPhilosophy;
