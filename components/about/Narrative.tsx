"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Narrative = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[#0077B6] font-bold tracking-[0.3em] uppercase text-sm">Our Positioning</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#03045E] leading-tight">
                One Trusted Point <br className="hidden sm:block" />of <span className="text-[#00B4D8]">Contact</span>
              </h2>
              <div className="w-16 h-1.5 bg-[#0077B6] rounded-full"></div>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-light text-justify">
              <p>
                Juno BizHub is a UAE-based Corporate Service Provider focused on making business establishment and ongoing corporate administration simpler, clearer and more efficient.
              </p>
              <p>
                From business idea to UAE operation, we help clients navigate jurisdiction selection, licensing, government processes and the practical requirements of establishing a compliant UAE presence.
              </p>
              <p>
                We serve a diverse range of clients, from first-time entrepreneurs and growing SMEs to international investors and E-commerce businesses. Our ideal clients value clarity, responsiveness, and one-point coordination rather than a transactional licence-only service.
              </p>
              <p>
                Spearheaded by our Head of Corporate Services, Suresh Kanjya, who brings over 20 years of elite banking experience in the UAE, we provide our clients with an unmatched advantage in navigating the financial and regulatory landscape.
              </p>
            </div>

            <div className="pt-2 md:pt-4">
               <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto bg-[#03045E] hover:bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                 Partner With Us
               </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl">
              <Image 
                src="/juno team/suresh HOCS.jpeg" 
                alt="Suresh Kanjya - Head of Corporate Services" 
                width={600} 
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background accent */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#0077B6]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#00B4D8]/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
