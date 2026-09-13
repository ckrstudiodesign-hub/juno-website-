"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LandingWhyUs = () => {
  const reasons = [
    {
      title: "Industry-Specific Expertise",
      description: "Our consultants have deep knowledge of specific sectors, from tech and crypto to real estate and trading, ensuring you get tailored advice.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Transparent Processes",
      description: "Track your application status, understand every fee, and stay informed with our clear, honest communication policy.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Comprehensive Solutions",
      description: "Beyond just the license, we help with visas, Emirates ID, dependent sponsorships, and opening corporate bank accounts.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Fast-Track Services",
      description: "Time is money. Our VIP typing centers and direct government connections mean your setup is completed in record time.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        
        <div className="mb-16">
          <span className="text-[#0077B6] font-bold tracking-wider text-sm uppercase mb-3 block">
            Juno Edge
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#03045E]">
            Why Juno BizHub
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl">
            With years of UAE market experience, we've helped thousands of entrepreneurs launch and scale their businesses successfully. Here's why they choose us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col sm:flex-row"
            >
              <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden shrink-0">
                <img 
                  src={reason.image} 
                  alt={reason.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#03045E] mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LandingWhyUs;
