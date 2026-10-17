"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Building2, Clock, Award, ShieldCheck } from 'lucide-react';
import { submitToWeb3Forms } from '@/lib/web3forms';

const HeroLanding = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-20 pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Juno BizHub Team" 
          fill 
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay similar to reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00102A]/90 via-[#00102A]/70 to-[#00102A]/20"></div>
        {/* Slanted overlay cut on the right side if needed, but a gradient works well */}
        <div className="absolute inset-0 bg-[#00102A]/40 sm:hidden"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12 mb-32">
          
          {/* Left Content */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 font-serif"
            >
              Exploring Your Business Setup Options?
              <span className="block mt-2 text-white">Set Up Your UAE Business with <span className="text-[#00B4D8]">Confidence.</span></span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-sans"
            >
              Getting expert advice makes all the difference. Start your journey with the UAE's most trusted corporate service provider.
            </motion.p>

            {/* Google Rating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl w-fit border border-white/20"
            >
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-white mr-1">Google</span>
                <span className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </span>
                <span className="text-white font-bold text-lg ml-2">4.8</span>
              </div>
            </motion.div>
          </div>

          {/* Right Lead Form */}
          <div className="lg:col-span-5 xl:col-span-5 xl:col-start-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-gray-100"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#0077B6]"></div>
              
              <div className="text-center mb-6">
                <h3 className="text-[#03045E] text-2xl font-bold mb-2">Get Started Below</h3>
                <p className="text-gray-600 text-sm">Fill in your details and an expert will call you back shortly.</p>
              </div>

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
                      subject: 'New Quote Request from Landing Page Hero',
                      message: `New Lead Request.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`,
                      extra: { formType: 'hero-landing' }
                    });
                    window.dispatchEvent(new CustomEvent('showSuccessPopup'));
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
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-800"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-800"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number (e.g. +971 50...)" 
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-800"
                    required
                  />
                </div>
                <div>
                  <select defaultValue="" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors text-gray-500 bg-white appearance-none">
                    <option value="" disabled>Business Activity</option>
                    <option value="consultancy">Consultancy & Services</option>
                    <option value="trading">Trading & E-commerce</option>
                    <option value="freelance">Freelance Permit</option>
                    <option value="holding">Holding Company</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <p className="text-xs text-gray-400 text-center px-2">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>

                <button 
                  type="submit" 
                  className="w-full bg-[#0077B6] hover:bg-[#005f92] text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  GET A QUOTE
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#03045E]/95 backdrop-blur-md border-t border-[#00B4D8]/30 hidden md:block z-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-4 divide-x divide-white/20 py-6">
            
            <div className="flex flex-col items-center justify-center text-white text-center">
              <Building2 className="w-6 h-6 text-[#00B4D8] mb-2" />
              <span className="text-2xl font-bold">15,000+</span>
              <span className="text-sm text-gray-300 font-medium">Companies Set Up</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-white text-center">
              <ShieldCheck className="w-6 h-6 text-[#00B4D8] mb-2" />
              <span className="text-2xl font-bold">12+</span>
              <span className="text-sm text-gray-300 font-medium">Years Experience</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-white text-center">
              <Clock className="w-6 h-6 text-[#00B4D8] mb-2" />
              <span className="text-2xl font-bold">24-48hr</span>
              <span className="text-sm text-gray-300 font-medium">Turnaround Time</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-white text-center">
              <Award className="w-6 h-6 text-[#00B4D8] mb-2" />
              <span className="text-2xl font-bold">10+</span>
              <span className="text-sm text-gray-300 font-medium">Industry Awards</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Mobile Bottom Stats (simplified) */}
      <div className="absolute bottom-0 left-0 w-full bg-[#03045E]/95 backdrop-blur-md border-t border-[#00B4D8]/30 md:hidden overflow-hidden z-20">
        <div className="flex justify-around items-center py-4 px-2">
          <div className="flex flex-col items-center text-white">
            <span className="text-xl font-bold">15k+</span>
            <span className="text-[10px] text-gray-300 uppercase">Companies</span>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col items-center text-white">
            <span className="text-xl font-bold">12+ Yrs</span>
            <span className="text-[10px] text-gray-300 uppercase">Experience</span>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col items-center text-white">
            <span className="text-xl font-bold">24hr</span>
            <span className="text-[10px] text-gray-300 uppercase">Setup</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
