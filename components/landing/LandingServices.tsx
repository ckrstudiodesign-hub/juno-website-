"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Landmark, FileCheck, ArrowRight, Stamp, Landmark as Bank, Globe } from 'lucide-react';

const LandingServices = () => {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#0077B6]" />,
      title: "Business Setup & Licensing",
      description: "Mainland, Free Zone, or Offshore. We secure your trade license quickly and legally in the right jurisdiction."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#0077B6]" />,
      title: "PRO & Government Services",
      description: "We handle all government approvals, document processing, and red tape so you don't have to."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#0077B6]" />,
      title: "Visa Assistance",
      description: "From Golden Visas to standard employment visas, we manage the entire application and medical process."
    },
    {
      icon: <Bank className="w-8 h-8 text-[#0077B6]" />,
      title: "Bank Account Opening",
      description: "Leverage our extensive banking network to open your corporate and personal bank accounts faster."
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#0077B6]" />,
      title: "Corporate Tax & VAT",
      description: "Stay compliant with UAE laws. We provide expert tax registration, filing, and accounting services."
    },
    {
      icon: <Stamp className="w-8 h-8 text-[#0077B6]" />,
      title: "Attestation & Legalization",
      description: "Fast and reliable attestation of personal and corporate documents from any embassy worldwide."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:w-1/3">
            <span className="text-[#0077B6] font-bold tracking-wider text-sm uppercase mb-3 block">
              Our Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#03045E] leading-tight">
              Everything Your Business Actually Needs
            </h2>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col h-full"
              >
                <div className="mb-6 bg-blue-50/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-[#0077B6] group-hover:text-white transition-colors [&>svg]:transition-colors">
                  {React.cloneElement(service.icon, { className: "w-8 h-8 text-[#0077B6] group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-[#03045E] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center text-[#0077B6] font-bold text-sm cursor-pointer group-hover:text-[#03045E] transition-colors mt-auto">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LandingServices;
