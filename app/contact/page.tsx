"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2, ChevronDown } from 'lucide-react';
import { submitToWeb3Forms } from '@/lib/web3forms';

const ContactPage = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '0d636ff5-c591-41c6-b8a6-12606869bb88';
      if (!accessKey) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 2000);
        return;
      }

      const name = nameRef.current?.value || '';
      const email = emailRef.current?.value || '';
      const phone = phoneRef.current?.value || '';
      const serviceType = serviceRef.current?.value || '';
      const msg = messageRef.current?.value || '';

      await submitToWeb3Forms({
        accessKey,
        subject: 'New Contact Page Inquiry - Juno BizHub',
        name,
        email,
        phone,
        message: `New contact page inquiry.\n\nService Type: ${serviceType}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${msg}`,
        extra: {
          formType: 'contact-page',
          serviceType,
        },
      });

        setSubmitStatus('success');
        // Reset form
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (phoneRef.current) phoneRef.current.value = '';
        if (serviceRef.current) serviceRef.current.value = 'Mainland Setup';
        if (messageRef.current) messageRef.current.value = '';
        
        window.dispatchEvent(new CustomEvent('showSuccessPopup'));
        
        setTimeout(() => setSubmitStatus('idle'), 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 2000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white overflow-x-hidden pt-20">
      {/* Hero Header */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-sapphire/5 blur-[120px] rounded-full -mr-40"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <span className="text-electric-sapphire font-black tracking-[0.5em] uppercase text-xs">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-deep-navy leading-tight tracking-tighter">
              Let's Start Your <br className="hidden sm:block" />
              <span className="text-gradient-primary">UAE Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-deep-navy/80 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Our consultants are ready to assist you with elite business setup solutions. Connect with us to architect your corporate future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 md:pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-24">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-10 md:space-y-12">
              <div className="space-y-4 md:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-black text-deep-navy">Direct <span className="text-electric-sapphire">Contact</span></h3>
                <p className="text-deep-navy/80 font-light text-base md:text-lg">Visit our headquarters in the heart of Dubai or reach out through our digital channels.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-deep-navy/5 rounded-2xl flex items-center justify-center text-electric-sapphire border border-deep-navy/10 group-hover:bg-electric-sapphire group-hover:text-black transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-deep-navy font-black uppercase text-xs tracking-widest opacity-50">Headquarters</p>
                    <p className="text-deep-navy text-lg font-medium">Office 24, Floor 26, Aspin Commercial Tower, Sheikh Zayed Road, Near Financial Centre Metro Station, Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-deep-navy/5 rounded-2xl flex items-center justify-center text-electric-sapphire border border-deep-navy/10 group-hover:bg-electric-sapphire group-hover:text-black transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-deep-navy font-black uppercase text-xs tracking-widest opacity-50">Call Us</p>
                    <a href="tel:+971 54 129 0038" className="text-deep-navy text-lg font-medium hover:text-electric-sapphire transition-colors">+971 54 129 0038</a>
                    <br />
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-deep-navy/5 rounded-2xl flex items-center justify-center text-electric-sapphire border border-deep-navy/10 group-hover:bg-electric-sapphire group-hover:text-black transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-deep-navy font-black uppercase text-xs tracking-widest opacity-50">Email Us</p>
                    <a href="mailto:info@junobizhub.ae" className="text-deep-navy text-lg font-medium hover:text-electric-sapphire transition-colors italic">info@junobizhub.ae</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-deep-navy/5 rounded-2xl flex items-center justify-center text-electric-sapphire border border-deep-navy/10 group-hover:bg-electric-sapphire group-hover:text-black transition-all duration-500">
                    <Clock size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-deep-navy font-black uppercase text-xs tracking-widest opacity-50">Office Hours</p>
                    <div className="flex flex-col">
                      <p className="text-deep-navy text-lg font-medium">Monday to Saturday | 9:30 AM – 6:30 PM</p>
                      <p className="text-deep-navy/50 text-sm font-medium">Closed on 1st and 2nd Saturdays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social or Badge area could go here */}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden group">
                {/* Decorative Pattern inside form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-sapphire/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
                
                <div className="relative z-10 space-y-6 md:space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-black">Inquiry <span className="text-electric-sapphire">Form</span></h3>
                    <p className="text-deep-navy/70 text-sm">Fill out the details below and our experts will contact you shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Full Name</label>
                        <input 
                          ref={nameRef}
                          type="text" 
                          placeholder="John Doe" 
                          required
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-electric-sapphire/50 transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Email Address</label>
                        <input 
                          ref={emailRef}
                          type="email" 
                          placeholder="john@example.com" 
                          required
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-electric-sapphire/50 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Phone Number</label>
                        <input 
                          ref={phoneRef}
                          type="tel"
                          placeholder="Phone Number (e.g. +971 50...)" 
                          required
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-electric-sapphire/50 transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Service Type</label>
                        <div className="relative">
                          <select 
                            ref={serviceRef}
                            defaultValue="Mainland Setup"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-electric-sapphire/50 transition-all font-medium appearance-none cursor-pointer"
                          >
                            <option>Mainland Setup</option>
                            <option>Free Zone Setup</option>
                            <option>Offshore Setup</option>
                            <option>Banking Assistance</option>
                            <option>Tax &amp; Accounting</option>
                            <option>Corporate Compliance</option>
                            <option>PRO &amp; Visas</option>
                            <option>Golden Visa</option>
                            <option>Other Consultations</option>
                          </select>
                          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Your Message</label>
                      <textarea 
                        ref={messageRef}
                        rows={5}
                        placeholder="Tell us about your business vision..." 
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-electric-sapphire/50 transition-all font-medium resize-none"
                      ></textarea>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-green-700 text-sm font-medium flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white border border-green-200 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="text-green-600" size={28} />
                        </div>
                        <div>
                          <div className="font-black text-base text-green-700">Your request is submitted. We will contact you soon.</div>
                          <div className="text-gray-600 mt-2 font-normal leading-relaxed">
                            You can also reach out to us on WhatsApp at <a href="https://wa.me/971566850911" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">+971 56 685 0911</a> or <a href="https://wa.me/971541290038" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">+971 54 129 0038</a>, or email us at <a href="mailto:info@junobizhub.ae" className="text-[#0077B6] font-bold hover:underline">info@junobizhub.ae</a>.
                          </div>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm font-medium">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="btn-premium w-full py-5 !rounded-2xl text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(84,101,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === 'submitting' ? 'Processing...' : 'Send Secure Message'} {submitStatus !== 'submitting' && <Send size={20} />}
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section or bottom highlight */}
      <section className="bg-white py-1 relative">
        <div className="h-[420px] w-full relative overflow-hidden">
          <iframe
            title="Juno BizHub Location - Office 24, Floor 26, Aspin Commercial Tower, Sheikh Zayed Road, Near Financial Centre Metro Station, Dubai, UAE"
            src="https://www.google.com/maps?q=Aspin+Commercial+Tower+Dubai&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />

          <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 bg-black/80 backdrop-blur-sm rounded-2xl px-4 py-3 border border-deep-navy/10">
            <p className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Office 24, Floor 26, Aspin Commercial Tower, Sheikh Zayed Road, Near Financial Centre Metro Station, Dubai, UAE</p>
            <a
              href="https://share.google/D7vXAY3lmRRJu2UDN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-sapphire text-xs md:text-sm font-semibold hover:text-electric-sapphire/80 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
