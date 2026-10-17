"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { submitToWeb3Forms } from '@/lib/web3forms';

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
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="w-full sm:w-full md:w-1/2 p-8 md:p-10 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#0077B6]"></div>
                
                <h4 className="text-2xl font-bold text-[#03045E] mb-2">Get a Free Quote</h4>
                <p className="text-gray-500 text-sm mb-6">Fill in your details and an expert will call you back shortly.</p>

                <form className="space-y-4" onSubmit={async (e) => { 
                  e.preventDefault(); 
                  const target = e.target as any;
                  const name = target[0].value;
                  const email = target[1].value;
                  const phone = target[2].value;
                  const service = target[3].value;
                  const btn = target[4];
                  const originalText = btn.innerText;
                  btn.innerText = 'SENDING...';
                  btn.disabled = true;
                  try {
                    await submitToWeb3Forms({
                      accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'e6948b50-588e-4b63-af5f-f14b0de16dc4',
                      name,
                      email,
                      phone,
                      subject: 'New Quote Request from Entry Popup',
                      message: `New Lead Request.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`,
                      extra: { formType: 'entry-popup' }
                    });
                    window.dispatchEvent(new CustomEvent('showSuccessPopup'));
                    setIsOpen(false); 
                  } catch (err) {
                    alert('Error submitting form. Please try again.');
                  } finally {
                    if (btn) {
                      btn.innerText = originalText;
                      btn.disabled = false;
                    }
                  }
                }}>
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
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number (e.g. +971 50...)" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-800"
                      required
                    />
                  </div>
                  <div className="relative">
                    <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-500 bg-white appearance-none cursor-pointer">
                      <option value="" disabled>Select a Service</option>
                      <option value="Business Setup">Business Setup</option>
                      <option value="Free Zones">Free Zones</option>
                      <option value="Corporate Services">Corporate Services</option>
                      <option value="Tax & Accounting">Tax & Accounting</option>
                      <option value="Banking">Banking</option>
                      <option value="AML compliance">AML compliance</option>
                      <option value="License Renewal">License Renewal</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#0077B6] hover:bg-[#005f92] text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 mt-2"
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
