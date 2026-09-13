"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const LandingComparison = () => {
  const comparisonData = [
    { feature: "Transparent Pricing", juno: true, others: false },
    { feature: "Dedicated Account Manager", juno: true, others: false },
    { feature: "Free Corporate Tax Consultation", juno: true, others: false },
    { feature: "Estimated Setup Time", juno: "24-48 Hours", others: "1-2 Weeks" },
    { feature: "Hidden Fees / Surcharges", juno: false, others: true },
    { feature: "End-to-End Visa Support", juno: true, others: false },
    { feature: "Bank Account Assistance", juno: "Guaranteed*", others: "Limited" },
    { feature: "Pro-League VIP Services", juno: true, others: false },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <span className="text-[#0077B6] font-bold tracking-wider text-sm uppercase mb-3 block">
            Why We Stand Out
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#03045E]">
            See the Difference for Yourself
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#03045E] text-white p-6 items-center">
            <div className="col-span-6 font-bold text-lg">Features</div>
            <div className="col-span-3 text-center font-bold text-xl text-[#00B4D8]">Juno BizHub</div>
            <div className="col-span-3 text-center font-bold text-lg text-gray-400">Others</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col divide-y divide-gray-100">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-12 p-5 items-center transition-colors hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
              >
                <div className="col-span-6 font-medium text-gray-700">
                  {row.feature}
                </div>
                
                {/* Juno Column */}
                <div className="col-span-3 flex justify-center text-[#03045E] font-bold">
                  {typeof row.juno === 'boolean' ? (
                    row.juno ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <XCircle className="w-6 h-6 text-red-400" />
                  ) : (
                    <span className="text-sm md:text-base">{row.juno}</span>
                  )}
                </div>
                
                {/* Others Column */}
                <div className="col-span-3 flex justify-center text-gray-500 font-medium">
                  {typeof row.others === 'boolean' ? (
                    row.others ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <XCircle className="w-6 h-6 text-red-400" />
                  ) : (
                    <span className="text-sm md:text-base">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-gray-400 text-xs mt-6">
          *Bank account opening is subject to compliance approval by the respective banking institution.
        </p>

      </div>
    </section>
  );
};

export default LandingComparison;
