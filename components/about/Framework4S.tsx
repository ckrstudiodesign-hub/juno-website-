"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Rocket, LineChart } from 'lucide-react';

const Framework4S = () => {
  const steps = [
    {
      title: "SIMPLIFIED",
      subtitle: "Establishment",
      icon: Rocket,
      desc: "The UAE offers over 40 free zones alongside mainland jurisdictions, each with distinct legal structures, activity choices, and office requirements. Making the wrong choice early on leads to operational restrictions and costly restructuring later.\n\nWe strip away legal jargon and evaluate your commercial goals upfront. By aligning your business activity with the precise legal framework, jurisdiction, and banking requirements, we eliminate guesswork and set your entity up for long-term operational efficiency.",
    },
    {
      title: "SEAMLESS",
      subtitle: "Execution",
      icon: Zap,
      desc: "Document rejections, portal errors, and multi-agency follow-ups waste valuable management time and stall market entry.\n\nServing as your single point of contact, we manage the end-to-end execution—trade name reservations, initial approvals, MOA drafting, Ejari registration, Establishment Cards, and visa processing. You get total process visibility without the administrative burden.",
    },
    {
      title: "SECURE",
      subtitle: "Compliance",
      icon: ShieldCheck,
      desc: "Modern UAE business requires strict adherence to evolving legislation, including Economic Substance Regulations (ESR), Ultimate Beneficial Ownership (UBO), Anti-Money Laundering (AML/CFT) laws, VAT, and Corporate Tax.\n\nWe build compliance into your corporate DNA from day one. Through proactive record management, timely tax filings, AML compliance setups, and automated renewal tracking, we shield your enterprise from fines, portal freezes, and legal exposure.",
    },
    {
      title: "SUSTAINED",
      subtitle: "Success",
      icon: LineChart,
      desc: "Most setup firms treat clients as transactional orders, disappearing the moment the license is printed.\n\nWe act as an extension of your internal team throughout your corporate lifecycle. Whether you are expanding your workforce, structuring new equity partners, opening bank accounts, or renewing annual licenses, Juno BizHub provides the continuous advisory needed to support long-term growth.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
          <span className="text-[#0077B6] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">The 4S Framework</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#03045E] mb-6">Our Core Operational Model</h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            To deliver on this promise, we operate under a structured 4-stage framework that translates regulatory complexity into measurable business advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,119,182,0.1)] transition-all group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0077B6]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0077B6] group-hover:text-white transition-colors duration-500">
                <step.icon className="w-7 h-7 md:w-8 md:h-8 transition-colors duration-500 group-hover:text-white text-[#0077B6]" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#03045E] mb-1">{step.title}</h3>
              <h4 className="text-base md:text-lg font-bold text-[#0077B6] mb-4 md:mb-6">{step.subtitle}</h4>
              <div className="space-y-4">
                {step.desc.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Juno BizHub Difference */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-24 bg-[#03045E] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0077B6]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-[#00B4D8] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">The Juno BizHub Difference</span>
            <h3 className="text-3xl md:text-5xl font-black italic mb-8">
              "You focus on scaling your vision; we protect the foundation that keeps it standing."
            </h3>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Partnering with Juno BizHub means gaining more than just a setup advisor. You gain a dedicated corporate partner committed to safeguarding your legal compliance, streamlining your daily administration, and supporting your business at every stage of growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Framework4S;
