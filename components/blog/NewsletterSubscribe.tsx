"use client";

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import SchemaMarkup from '../seo/SchemaMarkup';
import { submitToWeb3Forms } from '@/lib/web3forms';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    try {
      await submitToWeb3Forms({
        accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'e6948b50-588e-4b63-af5f-f14b0de16dc4',
        name: 'Newsletter Subscriber',
        email,
        subject: 'New Newsletter Subscription Request',
        message: `New Newsletter Subscription Request.\n\nEmail: ${email}`,
        extra: { formType: 'newsletter-subscription' }
      });
      setStatus('success');
      setEmail('');
      window.dispatchEvent(new CustomEvent('showSuccessPopup'));
    } catch (err) {
      alert('Error submitting form. Please try again.');
      setStatus('idle');
    }
  };

  const subscribeSchema = {
    "@type": "SubscribeAction",
    "object": {
      "@type": "Organization",
      "name": "Juno BizHub Corporate Services Providers"
    },
    "result": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.junobizhub.com/insights"
    }
  };

  return (
    <>
      <SchemaMarkup type="SubscribeAction" data={subscribeSchema} />
      <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[40px] p-8 md:p-12 overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6]/20 blur-[100px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
              Stay Ahead with Our <span className="text-[#00B4D8]">Weekly Briefing</span>
            </h3>
            <p className="text-white/80 font-light text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Subscribe to our exclusive newsletter to receive premium weekly insights directly to your inbox. We cover actionable strategies across Corporate Tax, Mainland & Free Zone structuring, and UAE Visas.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-black/10 backdrop-blur-md">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-8">
                <div className="w-16 h-16 bg-[#0077B6]/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#0077B6]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 uppercase">Subscription Confirmed</h4>
                <p className="text-gray-600 text-sm">Welcome to the Juno BizHub executive briefing.</p>
                <Link href="/insights" className="mt-4 text-[#0077B6] font-bold hover:underline">Read our latest Insights</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-gray-600 font-bold ml-4">
                    Corporate Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-14 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0077B6] focus:bg-white transition-all"
                      placeholder="executive@company.com"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#0077B6] hover:bg-[#005f92] text-white font-black uppercase tracking-widest text-xs py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                >
                  {status === 'loading' ? 'Processing...' : 'Subscribe Now'}
                  {status !== 'loading' && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
                </button>
                <Link href="/insights" className="block text-center text-[#0077B6] text-xs font-bold uppercase tracking-wider mt-4 hover:underline">
                  Or read our latest Insights
                </Link>
                <p className="text-center text-[10px] text-gray-500 uppercase tracking-wider mt-4">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-deep-navy/70">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
