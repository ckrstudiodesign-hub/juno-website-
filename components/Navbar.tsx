"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Business Setup',
      links: [
        { name: 'Mainland Company Formation', href: '/mainland-company-formation-in-dubai' },
        { name: 'LLC Formation', href: '/llc-company-formation-in-dubai' },
        { name: 'Professional License', href: '/professional-license-main-land-civil-company' },
        { name: 'Branch Office', href: '/branch-representative-office-in-main-land' },
        { name: 'Offshore Company Formation', href: '/offshore-company-formation-in-dubai' },
      ]
    },
    {
      title: 'Free Zones',
      links: [
        { name: 'Overview', href: '/dubai-free-zone-company-overview' },
        { name: 'IFZA', href: '/ifza-dubai-business-set-up' },
        { name: 'DMCC', href: '/dmcc-free-zone-company-setup' },
        { name: 'JAFZA', href: '/jafza-company-formation' },
        { name: 'Meydan', href: '/meydan-free-zone' },
        { name: 'SPC', href: '/spc-free-zone-setup' },
      ]
    },
    {
      title: 'Corporate Services',
      links: [
        { name: 'PRO Services', href: '/pro-services-dubai' },
        { name: 'Golden Visas', href: '/golden-visa-uae' },
        { name: 'UAE Will', href: '/uae-wills-service' },
        { name: 'Document Attestation', href: '/document-attestation-services' },
        { name: 'Legal Translation', href: '/legal-translation-dubai' },
        { name: 'ISO Certification', href: '/iso-certification-dubai' },
      ]
    },
    {
      title: 'Tax & Accounting',
      links: [
        { name: 'Corporate Tax', href: '/corporate-tax-uae' },
        { name: 'VAT Consultancy', href: '/vat-consultancy-uae' },
        { name: 'Bookkeeping & Accounting', href: '/bookkeeping-and-accounting-services' },
      ]
    },
    {
      title: 'Banking',
      links: [
        { name: 'Corporate Bank Account', href: '/bank-account-opening-dubai' },
        { name: 'Personal Bank Account', href: '/personal-bank-account-services' },
        { name: 'Offshore Banking', href: '/offshore-banking-services' },
        { name: 'Trade Finance', href: '/trade-finance-services' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Cost Calculator', href: '/cost-calculator' },
      ]
    },
    {
      title: 'Insights',
      links: [
        { name: 'Blog & News', href: '/blog' },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="w-full px-4 sm:px-8 h-20 flex items-center justify-between text-deep-navy border-b border-gray-200">
        
        {/* Left Side: Hamburger & Logo */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <Menu className="w-8 h-8" strokeWidth={1.5} />
          </button>
          <Link href="/" className="flex items-center gap-3">
             <div className="relative w-12 h-12 flex-shrink-0">
                <Image src="/logo.png" alt="Juno BizHub Logo" fill className="object-contain" />
             </div>
             <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-normal tracking-tight leading-none">
                  Juno BizHub
                </span>
                <span className="text-[8px] sm:text-[9px] font-sans uppercase tracking-[0.1em] text-deep-navy/70 mt-1">
                  Corporate Services Providers
                </span>
              </div>
          </Link>
        </div>

        {/* Center/Right Links - McKinsey Style */}
        <div className="hidden lg:flex items-end h-full pt-4 pb-0 gap-8">
           
           {menuItems.map((item) => (
             <div 
               key={item.title} 
               className="relative h-full flex flex-col justify-end pb-4 border-b-4 border-transparent hover:border-gray-400 transition-colors cursor-pointer group"
               onMouseEnter={() => setActiveDropdown(item.title)}
               onMouseLeave={() => setActiveDropdown(null)}
             >
                <span className="text-[15px] font-medium leading-none">{item.title}</span>
                
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-0 w-64 bg-white text-[#00284F] shadow-xl py-2"
                    >
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
           ))}
           <div className="h-full flex items-center ml-4">
             <Link href="/contact" className="px-6 py-2.5 bg-electric-sapphire text-white text-[13px] font-bold uppercase tracking-widest rounded-full hover:bg-black transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
               Book a consultation
             </Link>
           </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex h-[100dvh] w-full bg-black/50"
          >
            {/* Left Dark Panel */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="w-full sm:w-[350px] md:w-[400px] h-full bg-gray-50 text-deep-navy flex flex-col flex-shrink-0 relative z-20 shadow-2xl border-r border-gray-200"
            >
              {/* Header */}
              <div className="flex items-center p-6 sm:p-8 gap-6 border-b border-gray-200">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <X className="w-8 h-8 font-light" strokeWidth={1} />
                </button>
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                   <div className="relative w-10 h-10 flex-shrink-0">
                      <Image src="/logo.png" alt="Juno BizHub Logo" fill className="object-contain" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xl font-serif font-normal tracking-tight leading-none">
                        Juno BizHub
                      </span>
                      <span className="text-[8px] font-sans uppercase tracking-[0.1em] text-deep-navy/70 mt-1">
                        Corporate Services Providers
                      </span>
                    </div>
                </Link>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-6">
                 {menuItems.map((item) => (
                    <div key={item.title}>
                       <button 
                         onMouseEnter={() => { if (window.innerWidth >= 640) setActiveDropdown(item.title) }}
                         onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                         className={`w-full flex items-center justify-between px-6 sm:px-8 py-4 text-left transition-colors ${activeDropdown === item.title ? 'bg-white font-bold' : 'hover:bg-gray-100 font-medium'}`}
                       >
                         <span className="text-[17px] tracking-wide">{item.title}</span>
                         <ArrowRight className={`w-5 h-5 hidden sm:block ${activeDropdown === item.title ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                         <ChevronDown className={`w-5 h-5 sm:hidden transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                       </button>
                       
                       {/* Mobile Accordion */}
                       <AnimatePresence>
                         {activeDropdown === item.title && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="sm:hidden overflow-hidden bg-gray-100"
                           >
                             <div className="flex flex-col py-2">
                               {item.links.map((link) => (
                                 <Link
                                   key={link.href}
                                   href={link.href}
                                   onClick={() => setIsOpen(false)}
                                   className="pl-12 pr-6 py-3 text-[15px] text-gray-600 hover:text-deep-navy"
                                 >
                                   {link.name}
                                 </Link>
                               ))}
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>
                 ))}
                 <div className="px-6 sm:px-8 pt-6 pb-8 mt-auto border-t border-gray-200">
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full flex justify-center items-center px-6 py-3 bg-electric-sapphire text-white text-[15px] font-bold uppercase tracking-widest rounded-full hover:bg-black transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                      Book a consultation
                    </Link>
                 </div>
              </div>
            </motion.div>

            {/* Right White Panel (Desktop/Tablet Only) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden sm:block flex-1 h-full bg-white relative z-10 overflow-y-auto"
            >
              {activeDropdown && (
                <div className="p-12 md:p-24 max-w-5xl">
                   <div className="flex items-center gap-3 mb-16 border-b border-gray-200 pb-6">
                     <h2 className="text-3xl font-bold text-black">{activeDropdown}</h2>
                     <ArrowRight className="w-6 h-6 text-blue-600" />
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                     {menuItems.find(i => i.title === activeDropdown)?.links.map((link) => (
                       <Link
                         key={link.href}
                         href={link.href}
                         onClick={() => setIsOpen(false)}
                         className="text-gray-800 hover:text-[#00B4D8] text-[15px] hover:underline underline-offset-4 transition-all"
                       >
                         {link.name}
                       </Link>
                     ))}
                   </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
