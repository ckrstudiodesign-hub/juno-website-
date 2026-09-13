"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HeadphonesIcon, BadgeDollarSign, Building, FileText } from 'lucide-react';

const LandingPartner = () => {
  const features = [
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-[#0077B6]" />,
      title: "End-to-End Support",
      description: "From initial consultation to final license issuance, our team guides you through every step of the process with 24/7 dedicated support."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#0077B6]" />,
      title: "Dedicated Account Manager",
      description: "You'll have a single point of contact handling your entire setup, ensuring clear communication and zero confusion."
    },
    {
      icon: <BadgeDollarSign className="w-8 h-8 text-[#0077B6]" />,
      title: "100% Transparent Pricing",
      description: "No hidden fees or unexpected costs. We provide clear, itemized quotes before you commit to anything."
    },
    {
      icon: <Building className="w-8 h-8 text-[#0077B6]" />,
      title: "Flexible Workspace Solutions",
      description: "Whether you need a physical office, a co-working desk, or a virtual setup, we find the perfect space for your business."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 lg:pr-8">
            <span className="text-[#0077B6] font-bold tracking-wider text-sm uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#03045E] mb-6 leading-tight">
              What to Look for in a Business Setup Partner
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Choosing the right partner for your UAE company formation is critical. You need experts who understand the legal landscape, provide transparent advice, and handle the heavy lifting so you can focus on growing your business.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Here is what sets Juno BizHub apart from the rest of the industry.
            </p>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#03045E] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingPartner;
