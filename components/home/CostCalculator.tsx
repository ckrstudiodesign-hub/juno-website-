"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Briefcase, Landmark, Building2, Globe, 
  CheckCircle2, ArrowRight, ArrowLeft, 
  User, Mail, Phone, Calculator, CheckCircle
} from 'lucide-react';

type StepName = 'activity' | 'jurisdiction' | 'visas' | 'office' | 'result';

interface Answers {
  activity: string;
  jurisdiction: string;
  visas: string;
  office: string;
}

const COST_BASE: Record<string, number> = {
  'Mainland': 18500,
  'Free Zone': 12500,
  'Offshore': 9500,
};

const VISA_COST = 3500;

const BACKGROUND_IMAGES = [
  '/cost_cal_background/1.jpg',
  '/cost_cal_background/2.jpg',
  '/cost_cal_background/3.jpg',
  '/cost_cal_background/4.jpg',
  '/cost_cal_background/5.jpg',
];

export default function CostCalculator() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const [answers, setAnswers] = useState<Answers>({
    activity: '',
    jurisdiction: '',
    visas: '',
    office: '',
  });

  const totalSteps = 5;

  const handleSelect = (key: keyof Answers, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }, 300); // Small delay to show the click animation
  };

  const calculateCost = () => {
    let base = COST_BASE[answers.jurisdiction] || 12500;
    
    // Add visas
    if (answers.visas === '1 Visa') base += VISA_COST;
    if (answers.visas === '2 Visas') base += VISA_COST * 2;
    if (answers.visas === '3+ Visas') base += VISA_COST * 3;

    // Add office
    if (answers.office === 'Coworking Space') base += 2000;
    if (answers.office === 'Physical Office') base += 5000;

    return base.toLocaleString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Images Loop */}
      {BACKGROUND_IMAGES.map((src, idx) => (
        <div 
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${bgIndex === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image 
            src={src}
            alt="Background"
            fill
            unoptimized={true}
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}
      {/* Overlay to ensure text visibility without expensive GPU blur */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-[#0077B6] font-black tracking-[0.4em] uppercase text-xs">
            Estimate Setup Cost
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-gray-900">
            Cost <span className="text-[#0077B6]">Calculator</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Answer a few quick questions to receive a tailored estimate for your UAE business setup.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10 space-y-3 max-w-3xl mx-auto">
          <div className="flex justify-between items-end">
            <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
              Step {step} of {totalSteps}
            </span>
            <span className="text-[#0077B6] font-black text-sm">
              {Math.round(((step - 1) / (totalSteps - 1)) * 100)}%
            </span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] transition-all duration-500 ease-out rounded-full"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Calculator Card */}
        <div className="bg-white min-h-[500px] rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 p-6 md:p-12 relative overflow-hidden flex flex-col justify-center">
          
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077B6]/5 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none" />

          <AnimatePresence mode="wait">
            
            {/* STEP 1: ACTIVITY */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 relative z-10 w-full max-w-2xl mx-auto"
              >
                <div className="text-center md:text-left space-y-2 mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">What is your primary business activity?</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Commercial / Trading', icon: Briefcase },
                    { title: 'Professional / Services', icon: Landmark },
                    { title: 'Industrial', icon: Building2 },
                    { title: 'E-Commerce', icon: Globe },
                  ].map((item) => (
                    <button
                      key={item.title}
                      onClick={() => handleSelect('activity', item.title)}
                      className={`flex flex-col items-center md:flex-row md:items-start gap-4 p-6 rounded-3xl border-2 transition-all duration-300 text-center md:text-left group
                        ${answers.activity === item.title 
                          ? 'border-[#0077B6] bg-[#0077B6]/5' 
                          : 'border-gray-100 bg-gray-50 hover:border-[#0077B6]/30 hover:bg-white hover:shadow-lg'
                        }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors
                        ${answers.activity === item.title ? 'bg-[#0077B6] text-white' : 'bg-white text-[#0077B6] shadow-sm group-hover:bg-[#0077B6] group-hover:text-white'}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-gray-900 mt-2 md:mt-3">{item.title}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: JURISDICTION */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 relative z-10 w-full max-w-2xl mx-auto"
              >
                <div className="text-center md:text-left space-y-2 mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">Select preferred jurisdiction</h3>
                </div>
                
                <div className="grid gap-4">
                  {[
                    { title: 'Mainland', desc: 'Trade directly in the UAE local market without restrictions.' },
                    { title: 'Free Zone', desc: '100% foreign ownership with tax benefits and capital repatriation.' },
                    { title: 'Offshore', desc: 'International trading and asset holding with strict privacy.' },
                  ].map((item) => (
                    <button
                      key={item.title}
                      onClick={() => handleSelect('jurisdiction', item.title)}
                      className={`flex items-center gap-6 p-6 rounded-3xl border-2 transition-all duration-300 text-left group
                        ${answers.jurisdiction === item.title 
                          ? 'border-[#0077B6] bg-[#0077B6]/5' 
                          : 'border-gray-100 bg-gray-50 hover:border-[#0077B6]/30 hover:bg-white hover:shadow-lg'
                        }`}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0
                        ${answers.jurisdiction === item.title ? 'border-[#0077B6]' : 'border-gray-300'}`}>
                        {answers.jurisdiction === item.title && <div className="w-3 h-3 bg-[#0077B6] rounded-full" />}
                      </div>
                      <div>
                        <span className="font-black uppercase tracking-tight text-lg text-gray-900 block">{item.title}</span>
                        <span className="text-gray-500 text-sm font-medium mt-1 block">{item.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: VISAS */}
            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 relative z-10 w-full max-w-2xl mx-auto"
              >
                <div className="text-center md:text-left space-y-2 mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">How many visas do you need?</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['0 Visas', '1 Visa', '2 Visas', '3+ Visas'].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleSelect('visas', item)}
                      className={`flex flex-col items-center justify-center gap-3 py-10 px-4 rounded-3xl border-2 transition-all duration-300 text-center group
                        ${answers.visas === item 
                          ? 'border-[#0077B6] bg-[#0077B6]/5' 
                          : 'border-gray-100 bg-gray-50 hover:border-[#0077B6]/30 hover:bg-white hover:shadow-lg'
                        }`}
                    >
                      <User className={`w-8 h-8 ${answers.visas === item ? 'text-[#0077B6]' : 'text-gray-400 group-hover:text-[#0077B6]'}`} />
                      <span className="font-bold text-gray-900">{item}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: OFFICE */}
            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 relative z-10 w-full max-w-2xl mx-auto"
              >
                <div className="text-center md:text-left space-y-2 mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">What type of office facility do you require?</h3>
                </div>
                
                <div className="grid gap-4">
                  {[
                    { title: 'Flexi-Desk', desc: 'Shared desk space in a business center. Ideal for minimal physical presence.' },
                    { title: 'Coworking Space', desc: 'Dedicated desk in a shared environment. Good for freelancers and small teams.' },
                    { title: 'Physical Office', desc: 'Private enclosed office space. Required for larger teams and retail.' },
                  ].map((item) => (
                    <button
                      key={item.title}
                      onClick={() => handleSelect('office', item.title)}
                      className={`flex items-center gap-6 p-6 rounded-3xl border-2 transition-all duration-300 text-left group
                        ${answers.office === item.title 
                          ? 'border-[#0077B6] bg-[#0077B6]/5' 
                          : 'border-gray-100 bg-gray-50 hover:border-[#0077B6]/30 hover:bg-white hover:shadow-lg'
                        }`}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0
                        ${answers.office === item.title ? 'border-[#0077B6]' : 'border-gray-300'}`}>
                        {answers.office === item.title && <div className="w-3 h-3 bg-[#0077B6] rounded-full" />}
                      </div>
                      <div>
                        <span className="font-black uppercase tracking-tight text-lg text-gray-900 block">{item.title}</span>
                        <span className="text-gray-500 text-sm font-medium mt-1 block">{item.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 5: RESULT & FORM */}
            {step === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12"
              >
                {!isSuccess ? (
                  <>
                    <div className="w-full max-w-md mx-auto text-center">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 uppercase mb-2">Estimate Ready!</h3>
                      <p className="text-gray-500 text-sm font-medium mb-8">Enter your details below to unlock your custom setup estimate.</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input 
                            type="text" 
                            required
                            placeholder="Full Name" 
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all font-medium text-gray-900"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input 
                            type="tel" 
                            required
                            placeholder="Phone Number" 
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all font-medium text-gray-900"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input 
                            type="email" 
                            placeholder="Email Address (Optional)" 
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all font-medium text-gray-900"
                          />
                        </div>
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full btn-premium !rounded-2xl !py-4 flex items-center justify-center gap-2 mt-4"
                        >
                          {isSubmitting ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              View My Estimate <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <div className="w-full flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold tracking-wide">
                        <CheckCircle2 className="w-4 h-4" />
                        Estimate Unlocked
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 uppercase">Your Setup Estimate</h3>
                      
                      <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Estimated Starting Cost</p>
                        <div className="flex items-end gap-2 text-[#0077B6]">
                          <span className="text-2xl font-bold mb-1">AED</span>
                          <span className="text-5xl font-black tracking-tighter">{calculateCost()}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">*This is an approximate estimate based on current DED & Free Zone regulations. Final cost depends on specific license activities and approvals.</p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-sm font-medium text-gray-600 border-b border-gray-100 pb-2">
                          <span>Activity:</span> <span className="text-gray-900 font-bold">{answers.activity}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm font-medium text-gray-600 border-b border-gray-100 pb-2">
                          <span>Jurisdiction:</span> <span className="text-gray-900 font-bold">{answers.jurisdiction}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm font-medium text-gray-600 border-b border-gray-100 pb-2">
                          <span>Visas:</span> <span className="text-gray-900 font-bold">{answers.visas}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm font-medium text-gray-600 border-b border-gray-100 pb-2">
                          <span>Office:</span> <span className="text-gray-900 font-bold">{answers.office}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-[32px] border border-gray-100 h-full">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-lg shadow-green-100/50">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-black text-gray-900 uppercase mb-4">Request Received</h4>
                      <p className="text-gray-500 font-medium max-w-xs mx-auto text-sm mb-8">
                        Our setup consultants will contact you shortly with a detailed breakdown and next steps.
                      </p>
                      <button 
                        onClick={() => {
                          setIsSuccess(false);
                          setStep(1);
                          setAnswers({ activity: '', jurisdiction: '', visas: '', office: '' });
                        }}
                        className="border-2 border-gray-200 px-8 py-3 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors w-full"
                      >
                        Calculate Another
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>

          {/* Navigation Controls (Only show if not on step 1 and not submitted) */}
          {step > 1 && step <= totalSteps && !isSuccess && (
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20">
              <button 
                onClick={() => setStep(prev => prev - 1)}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-bold transition-colors text-sm uppercase tracking-wider bg-white py-2 px-4 rounded-full border border-gray-100 shadow-sm hover:shadow-md"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
