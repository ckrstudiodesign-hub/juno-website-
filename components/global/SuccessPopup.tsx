"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, MessageCircle, Mail } from 'lucide-react';

export default function SuccessPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('showSuccessPopup', handleOpen);
    return () => window.removeEventListener('showSuccessPopup', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[9998] bg-[#03045E]/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative pointer-events-auto border border-blue-50">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="bg-[#0077B6] p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
                
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#0077B6]" />
                </motion.div>
                <h3 className="text-3xl font-black text-white tracking-tight relative z-10">
                  Request Sent!
                </h3>
              </div>
              
              <div className="p-8 text-center space-y-6">
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  Your details have been successfully submitted. Our corporate setup experts will contact you shortly to guide you forward.
                </p>
                
                <div className="bg-blue-50/50 rounded-2xl p-4 space-y-3 text-left border border-blue-100/50">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 text-center">Need immediate assistance?</p>
                  <a href="https://wa.me/971566850911" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#0077B6] text-sm font-semibold hover:bg-blue-100 p-2.5 rounded-xl transition-colors">
                    <MessageCircle className="w-5 h-5" /> +971 56 685 0911
                  </a>
                  <a href="https://wa.me/971541290038" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#0077B6] text-sm font-semibold hover:bg-blue-100 p-2.5 rounded-xl transition-colors">
                    <MessageCircle className="w-5 h-5" /> +971 54 129 0038
                  </a>
                  <a href="mailto:info@junobizhub.ae" className="flex items-center gap-3 text-[#0077B6] text-sm font-semibold hover:bg-blue-100 p-2.5 rounded-xl transition-colors">
                    <Mail className="w-5 h-5" /> info@junobizhub.ae
                  </a>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Got it, Thanks!
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
