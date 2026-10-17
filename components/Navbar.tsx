"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

const WaveHamburger = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className="relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] p-1 hover:bg-gray-100 rounded transition-colors"
      aria-label="Toggle Menu"
    >
      <motion.div
        animate={isOpen ? { y: 8, rotate: 45, backgroundColor: "#00B4D8" } : { y: 0, rotate: 0, backgroundColor: "#03045E" }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="w-7 h-[2px] rounded-full origin-center"
      />
      <motion.div
        animate={isOpen ? { opacity: 0, x: 15, backgroundColor: "#0077B6" } : { opacity: 1, x: 0, backgroundColor: "#03045E" }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.05 }}
        className="w-7 h-[2px] rounded-full"
      />
      <motion.div
        animate={isOpen ? { y: -8, rotate: -45, backgroundColor: "#00B4D8" } : { y: 0, rotate: 0, backgroundColor: "#03045E" }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.1 }}
        className="w-7 h-[2px] rounded-full origin-center"
      />
    </button>
  );
};

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        { name: 'DAFZA', href: '/business-setup-in-dafza' },
        { name: 'Dubai South', href: '/dubai-south-free-zone-business-setup' },
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
        { name: 'Blog & News', href: '/insights' },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
      <div className="relative z-[130] w-full px-4 sm:px-8 h-20 flex items-center justify-between text-deep-navy border-b border-gray-200">
        
        {/* Left Side: Hamburger & Logo */}
        <div className="flex items-center gap-6">
          <WaveHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
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
                  {!isOpen && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-0 w-72 bg-white shadow-2xl py-3 rounded-b-xl border border-gray-100 z-[150]"
                    >
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-6 py-2.5 text-[15px] font-medium text-slate-700 hover:text-electric-sapphire hover:bg-blue-50/50 transition-colors"
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
             <button 
               onClick={() => window.dispatchEvent(new Event('openEntryPopup'))} 
               className="px-6 py-2.5 bg-electric-sapphire text-white text-[13px] font-bold uppercase tracking-widest rounded-full hover:bg-black transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
             >
               Book a consultation
             </button>
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
              className="w-full sm:w-[350px] md:w-[400px] h-full bg-gray-50 text-deep-navy flex flex-col flex-shrink-0 relative z-20 shadow-2xl pt-20 border-r border-gray-200"
            >
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
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        window.dispatchEvent(new Event('openEntryPopup'));
                      }}
                      className="w-full flex justify-center items-center px-6 py-3 bg-electric-sapphire text-white text-[15px] font-bold uppercase tracking-widest rounded-full hover:bg-black transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
                    >
                      Book a consultation
                    </button>
                 </div>
              </div>
            </motion.div>

            {/* Right White Panel (Desktop/Tablet Only) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden sm:block flex-1 h-full bg-white relative z-10 overflow-y-auto pt-20"
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
                   
                   {(() => {
                     const getCategoryContent = (title: string) => {
                       switch (title) {
                         case 'Business Setup':
                           return { img: '/images/hero-bg.jpg', title: 'Launch Your Legacy', desc: 'Expert mainland and offshore business setup solutions across the UAE.' };
                         case 'Free Zones':
                           return { img: '/images/nav-stock.jpg', title: 'Tax-Free Growth', desc: 'Discover the perfect free zone jurisdiction for your specific business activity.' };
                         case 'Corporate Services':
                           return { img: '/images/hero-bg.jpg', title: 'Expert Corporate Services', desc: 'Elevate your business in the UAE with our premium setup and corporate solutions.' };
                         case 'Tax & Accounting':
                           return { img: '/images/nav-stock.jpg', title: 'Financial Clarity', desc: 'Stay compliant with our expert corporate tax, VAT, and bookkeeping services.' };
                         case 'Banking':
                           return { img: '/images/hero-bg.jpg', title: 'Banking Connections', desc: 'Leverage our network to secure corporate and personal bank accounts quickly.' };
                         case 'About':
                           return { img: '/images/nav-stock.jpg', title: 'About Juno BizHub', desc: 'Your trusted partner in navigating the UAE corporate landscape.' };
                         case 'Insights':
                           return { img: '/images/hero-bg.jpg', title: 'Market Insights', desc: 'Stay informed with the latest news, regulations, and business trends.' };
                         default:
                           return { img: '/images/nav-stock.jpg', title: 'Expert Corporate Services', desc: 'Elevate your business in the UAE with our premium setup and corporate solutions.' };
                       }
                     };
                     
                     const content = getCategoryContent(activeDropdown);
                     
                     return (
                       <motion.div 
                         key={activeDropdown} // forces re-render/animation on category change
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.4 }}
                         className="mt-20 relative w-full h-[320px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
                       >
                         <Image 
                           src={content.img} 
                           alt={content.title} 
                           fill 
                           className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/90 via-[#03045E]/40 to-transparent flex flex-col justify-end p-10">
                           <h3 className="text-white text-3xl font-serif font-bold mb-3 tracking-tight">{content.title}</h3>
                           <p className="text-blue-50 text-[15px] max-w-md font-sans">{content.desc}</p>
                         </div>
                       </motion.div>
                     );
                   })()}
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
