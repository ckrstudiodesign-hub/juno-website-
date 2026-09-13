"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

const EntryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup shortly after page load on every refresh
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    const handleOpenPopup = () => setIsOpen(true);
    window.addEventListener('openEntryPopup', handleOpenPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('openEntryPopup', handleOpenPopup);
    };
  }, []);

  // Allow closing via Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[200] bg-[#03045E]/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative pointer-events-auto">
              
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/50 backdrop-blur-md p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side - Image & Copy */}
              <div className="w-full md:w-1/2 relative bg-[#03045E] hidden sm:block">
                <Image 
                  src="/images/hero-bg.jpg" 
                  alt="Business Setup Dubai" 
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03045E] via-[#03045E]/60 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-serif font-bold mb-4">
                    Exploring Your Business Setup Options?
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    Set up your UAE business with confidence. Get expert advice and a clear roadmap for your mainland, free zone, or offshore company formation.
                  </p>
                  
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg w-fit border border-white/20">
                    <span className="text-white font-bold text-sm">Join 15,000+ Companies</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="w-full sm:w-full md:w-1/2 p-8 md:p-10 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#0077B6]"></div>
                
                <h4 className="text-2xl font-bold text-[#03045E] mb-2">Get a Free Quote</h4>
                <p className="text-gray-500 text-sm mb-6">Fill in your details and an expert will call you back shortly.</p>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-800"
                      required
                    />
                  </div>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +971
                    </span>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-500 bg-white appearance-none">
                      <option value="" disabled>Select a Service</option>
                      <option value="Business Setup">Business Setup</option>
                      <option value="Free Zones">Free Zones</option>
                      <option value="Corporate Services">Corporate Services</option>
                      <option value="Tax & Accounting">Tax & Accounting</option>
                      <option value="Banking">Banking</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#E63946] hover:bg-[#D62828] text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 mt-2"
                  >
                    GET A QUOTE
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Your information is 100% secure. No spam.
                  </p>
                </form>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EntryPopup;
