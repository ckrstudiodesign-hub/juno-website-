"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Globe2, Landmark, CheckCircle2, RotateCcw, User, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

type StructureType = 'Mainland' | 'Free Zone' | 'Offshore';

interface Scores {
  Mainland: number;
  'Free Zone': number;
  Offshore: number;
}

const steps = [
  {
    title: "Primary Market",
    question: "Where are your primary customers located?",
    options: [
      { text: "Mainly within the UAE local market", scores: { Mainland: 3, 'Free Zone': 0, Offshore: 0 } },
      { text: "Internationally / Outside the UAE", scores: { Mainland: 0, 'Free Zone': 2, Offshore: 2 } },
      { text: "Both local and international", scores: { Mainland: 2, 'Free Zone': 1, Offshore: 0 } }
    ]
  },
  {
    title: "Physical Presence",
    question: "What kind of physical workspace do you require in the UAE?",
    options: [
      { text: "Retail shop, warehouse, or commercial office", scores: { Mainland: 3, 'Free Zone': 0, Offshore: 0 } },
      { text: "Flexi-desk or co-working space", scores: { Mainland: 0, 'Free Zone': 3, Offshore: 0 } },
      { text: "No physical presence required (virtual/holding)", scores: { Mainland: 0, 'Free Zone': 1, Offshore: 3 } }
    ]
  },
  {
    title: "Business Activity",
    question: "What is your primary business activity?",
    options: [
      { text: "Trading of physical goods", scores: { Mainland: 1, 'Free Zone': 1, Offshore: 0 } },
      { text: "Professional Services / Consultancy", scores: { Mainland: 1, 'Free Zone': 2, Offshore: 0 } },
      { text: "Holding Company / Asset Protection", scores: { Mainland: 0, 'Free Zone': 0, Offshore: 3 } }
    ]
  }
];

const StructureFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Scores>({ Mainland: 0, 'Free Zone': 0, Offshore: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelect = (optionScores: Scores) => {
    const newScores = {
      Mainland: scores.Mainland + optionScores.Mainland,
      'Free Zone': scores['Free Zone'] + optionScores['Free Zone'],
      Offshore: scores.Offshore + optionScores.Offshore
    };
    
    setScores(newScores);

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormSubmitted(true);
    }, 1000);
  };

  const resetFinder = () => {
    setCurrentStep(0);
    setScores({ Mainland: 0, 'Free Zone': 0, Offshore: 0 });
    setIsFinished(false);
    setIsFormSubmitted(false);
  };

  const getRecommendation = (): StructureType => {
    let highestScore = -1;
    let recommended: StructureType = 'Free Zone'; // default fallback
    
    (Object.keys(scores) as StructureType[]).forEach(key => {
      if (scores[key] > highestScore) {
        highestScore = scores[key];
        recommended = key;
      }
    });
    
    return recommended;
  };

  const recommendation = isFinished ? getRecommendation() : null;

  const resultDetails = {
    'Mainland': {
      icon: <Building2 className="w-12 h-12 text-electric-sapphire" />,
      desc: "Based on your requirements for local market access and physical presence, a Mainland company structure appears most suitable.",
      link: "/mainland-company-formation-in-dubai"
    },
    'Free Zone': {
      icon: <Globe2 className="w-12 h-12 text-electric-sapphire" />,
      desc: "Given your international focus and flexible workspace needs, a Free Zone setup offers the best balance of ownership and tax benefits.",
      link: "/dubai-free-zone-company-overview"
    },
    'Offshore': {
      icon: <Landmark className="w-12 h-12 text-electric-sapphire" />,
      desc: "For your holding and asset protection requirements without physical UAE operations, an Offshore entity is highly recommended.",
      link: "/offshore-company-formation-in-dubai"
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-sapphire/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B4D8]/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-sapphire/10 text-electric-sapphire font-black tracking-widest text-[10px] uppercase mb-6"
          >
             Interactive Assessment
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-deep-navy tracking-tighter uppercase leading-none mb-6"
          >
            UAE Business <span className="text-electric-sapphire">Structure Finder</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-deep-navy/70 text-lg font-light max-w-2xl mx-auto"
          >
            Answer a few quick questions to discover which UAE corporate structure aligns best with your strategic goals.
          </motion.p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-8 md:p-12 min-h-[400px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-8 text-sm font-bold uppercase tracking-widest text-deep-navy/40">
                  <span>Step {Math.min(currentStep + 1, steps.length)} of {steps.length}</span>
                  <span>{steps[Math.min(currentStep, steps.length - 1)]?.title}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-deep-navy mb-10 leading-tight">
                  {steps[Math.min(currentStep, steps.length - 1)]?.question}
                </h3>

                <div className="space-y-4 mt-auto">
                  {steps[Math.min(currentStep, steps.length - 1)]?.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(option.scores)}
                      className="w-full text-left p-6 rounded-2xl border-2 border-gray-100 hover:border-electric-sapphire hover:bg-electric-sapphire/5 transition-all group flex items-center justify-between"
                    >
                      <span className="text-lg font-medium text-deep-navy group-hover:text-electric-sapphire transition-colors">
                        {option.text}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-electric-sapphire group-hover:text-white transition-colors">
                        <ArrowRight size={16} />
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-1 bg-gray-100 rounded-full mt-10 overflow-hidden">
                   <div 
                     className="h-full bg-electric-sapphire transition-all duration-500 ease-out"
                     style={{ width: `${((currentStep) / steps.length) * 100}%` }}
                   ></div>
                </div>
              </motion.div>
            ) : !isFormSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center h-full py-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-3xl font-black text-deep-navy mb-4">Assessment Complete!</h3>
                <p className="text-deep-navy/60 mb-8 max-w-md">
                  Enter your details below to unlock your recommended corporate structure.
                </p>

                <form onSubmit={handleFormSubmit} className="w-full max-w-sm space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-electric-sapphire focus:ring-2 focus:ring-electric-sapphire/20 transition-all font-medium text-gray-900"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone Number" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-electric-sapphire focus:ring-2 focus:ring-electric-sapphire/20 transition-all font-medium text-gray-900"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="Email Address (Optional)" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-electric-sapphire focus:ring-2 focus:ring-electric-sapphire/20 transition-all font-medium text-gray-900"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-electric-sapphire text-white font-bold py-4 rounded-2xl hover:bg-deep-navy transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Get My Recommendation <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-24 h-24 bg-electric-sapphire/10 rounded-full flex items-center justify-center mb-8 relative">
                   <div className="absolute inset-0 bg-electric-sapphire/20 rounded-full animate-ping opacity-75"></div>
                   {recommendation && resultDetails[recommendation].icon}
                </div>
                
                <div className="inline-flex items-center gap-2 text-electric-sapphire font-bold tracking-widest text-[10px] uppercase mb-4 bg-electric-sapphire/10 px-4 py-1.5 rounded-full">
                  <CheckCircle2 size={14} /> Recommended Structure
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-deep-navy mb-6 tracking-tight uppercase">
                  {recommendation}
                </h3>
                
                <p className="text-deep-navy/70 text-lg leading-relaxed max-w-lg mx-auto mb-8 font-light">
                  {recommendation && resultDetails[recommendation].desc}
                </p>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-2xl mb-10 max-w-md">
                  <p className="text-xs text-yellow-800 font-medium">
                    <span className="font-bold uppercase">Note:</span> This is a starting point for discussion, not a legal conclusion. Complex structures require bespoke advice.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                  <Link 
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-electric-sapphire text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-black transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    href={recommendation ? resultDetails[recommendation].link : '#'}
                    className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-deep-navy font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Read Details
                  </Link>
                </div>

                <button 
                  onClick={resetFinder}
                  className="mt-8 flex items-center gap-2 text-sm text-deep-navy/50 hover:text-electric-sapphire transition-colors font-medium"
                >
                  <RotateCcw size={16} /> Start Over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StructureFinder;
