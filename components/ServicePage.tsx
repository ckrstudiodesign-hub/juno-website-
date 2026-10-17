"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceContactForm from './ServiceContactForm';
import ExecutiveSummary from './geo/ExecutiveSummary';
import DecisionTable from './geo/DecisionTable';
import StepByStep from './geo/StepByStep';
import FaqAccordion from './geo/FaqAccordion';
interface ServiceSection {
  title: string;
  content?: string | string[];
  list?: (string | { name: string; logo: string })[];
  footer?: string;
}

interface ServicePageProps {
  title: string;
  subtitle?: string;
  description: string | string[];
  advantagesTitle?: string;
  advantages?: string[];
  sections?: ServiceSection[];
  sectionsAfterTable?: ServiceSection[];
  hallmarksTitle?: string;
  hallmarks?: {
    title: string;
    description: string;
  }[];
  heroImage?: string;
  executiveSummary?: { summary: string | string[], keyFacts: string[] };
  decisionTable?: { title: string, option1Name: string, option2Name: string, features: { name: string, option1: boolean | string, option2: boolean | string }[] };
  stepByStep?: { title: string, steps: { title: string, description: string }[] };
  faqs?: { question: string, answer: string }[];
}

const ServicePage = ({
  title,
  subtitle,
  description,
  advantagesTitle = "Key Advantages",
  advantages,
  sections,
  hallmarksTitle = "Our Service Hallmarks",
  hallmarks,
  heroImage = "/images/mainland.png",
  executiveSummary,
  decisionTable,
  stepByStep,
  faqs,
  sectionsAfterTable
}: ServicePageProps) => {
  const renderSection = (section: ServiceSection, idx: number) => (
              <motion.section 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8 md:space-y-12"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-8 md:w-12 h-px bg-electric-sapphire"></div>
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-deep-navy uppercase tracking-tight">{section.title}</h2>
                </div>
                
                <div className="space-y-10">
                  {section.content && (
                    <div className="text-deep-navy/80 text-lg leading-relaxed font-light">
                      {Array.isArray(section.content) ? (
                        section.content.map((p, i) => <p key={i} className="mb-6">{p}</p>)
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                  )}
                  
                  {section.list && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.list.map((item, i) => {
                         const isString = typeof item === 'string';
                         const name = isString ? item : item.name;
                         const logo = isString ? null : item.logo;
                         
                         return (
                          <div key={i} className="bg-deep-navy/5 p-4 md:p-6 rounded-[2rem] md:rounded-3xl flex items-center gap-4 md:gap-6 hover:bg-white/10 transition-all border border-deep-navy/10 hover:border-electric-sapphire/30 group">
                            {logo ? (
                              <div className="w-16 h-12 md:w-20 md:h-16 relative shrink-0 transition-all">
                                <Image src={logo} alt={name} fill className="object-contain object-left" unoptimized />
                              </div>
                            ) : (
                              <div className="w-6 h-6 bg-electric-sapphire/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-electric-sapphire transition-colors">
                                <CheckCircle2 className="text-electric-sapphire group-hover:text-black w-4 h-4 transition-colors" />
                              </div>
                            )}
                            <span className={`text-deep-navy font-bold text-sm md:text-base leading-relaxed`}>{name}</span>
                          </div>
                         );
                      })}
                    </div>
                  )}

                  {section.footer && (
                    <p className="text-deep-navy/80 text-lg leading-relaxed font-light">{section.footer}</p>
                  )}
                </div>
              </motion.section>
  );

  return (
    <div className="bg-white text-deep-navy min-h-screen pb-32 pt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-sapphire/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Dynamic Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] md:min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover opacity-30 grayscale-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl mx-auto"
           >
              <Link href="/" className="inline-flex items-center gap-2 text-electric-sapphire text-[10px] font-black tracking-[0.4em] uppercase mb-6 md:mb-10 hover:gap-4 transition-all opacity-60 hover:opacity-100">
                <ArrowLeft size={14} /> Back to Hub
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 md:mb-8 leading-[1.1] text-deep-navy tracking-tighter uppercase">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 3 === 2 ? "text-gradient-primary" : ""}>{word} </span>
                ))}
              </h1>
              {subtitle && (
                <div className="inline-block px-5 py-2 glass rounded-full border border-electric-sapphire/20">
                  <p className="text-xs sm:text-sm md:text-base text-electric-sapphire font-bold tracking-widest uppercase">
                    {subtitle}
                  </p>
                </div>
              )}
           </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">
          {/* Main Content Area */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-16 md:space-y-24">
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg md:prose-xl max-w-none"
            >
              <div className="text-deep-navy/80 text-base md:text-xl leading-relaxed space-y-6 md:space-y-10 font-light">
                {Array.isArray(description) ? (
                  description.map((p, i) => <p key={i} className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-black first-letter:text-electric-sapphire first-letter:mr-3 first-letter:float-left">{p}</p>)
                ) : (
                  <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-black first-letter:text-electric-sapphire first-letter:mr-3 first-letter:float-left">{description}</p>
                )}
              </div>
            </motion.section>

            {executiveSummary && (
              <ExecutiveSummary summary={executiveSummary.summary} keyFacts={executiveSummary.keyFacts} />
            )}

            {decisionTable && (
              <DecisionTable {...decisionTable} />
            )}

            {sectionsAfterTable && sectionsAfterTable.map(renderSection)}

            {stepByStep && (
              <StepByStep {...stepByStep} />
            )}
            {sections && sections.map(renderSection)}

            {/* Standard Service Highlights - Universal Content Expansion */}
            <section className="space-y-8 md:space-y-12 pt-8 md:pt-12 border-t border-deep-navy/10">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-8 md:w-12 h-px bg-electric-sapphire"></div>
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-deep-navy uppercase tracking-tight">Our Premium Standard</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                   {[
                     { t: "Elite Banking", d: "Direct introductions to premier UAE banks including multi-currency account setup support." },
                     { t: "Tax Compliance", d: "Strategic corporate tax and VAT planning supported by appropriately qualified professionals." },
                     { t: "Concierge Pro", d: "End-to-end visa processing and government liaison services for your entire team." }
                   ].map((item, i) => (
                     <div key={i} className="glass p-6 md:p-8 rounded-3xl space-y-4 border-electric-sapphire/10">
                        <h4 className="text-electric-sapphire font-black uppercase text-sm tracking-widest">{item.t}</h4>
                        <p className="text-deep-navy/70 text-xs md:text-sm leading-relaxed font-light">{item.d}</p>
                     </div>
                   ))}
                </div>
            </section>

            {hallmarks && (
              <section className="space-y-8 md:space-y-12">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-black text-deep-navy uppercase tracking-tight">{hallmarksTitle}</h2>
                  <div className="w-16 h-1 bg-electric-sapphire mt-4 rounded-full mx-auto md:mx-0"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {hallmarks.map((hallmark, idx) => (
                    <div key={idx} className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[40px] space-y-4 md:space-y-6">
                      <h4 className="text-lg md:text-xl font-bold text-electric-sapphire uppercase tracking-tight">{hallmark.title}</h4>
                      <p className="text-deep-navy/80 font-light leading-relaxed text-sm italic">{hallmark.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {faqs && (
              <FaqAccordion faqs={faqs} />
            )}
          </div>

          {/* Sidebar Area - Form Centered Right */}
          <div className="lg:col-span-5 xl:col-span-4 mt-12 lg:mt-0">
            <div className="sticky top-24 md:top-32 space-y-8 md:space-y-10">
              
              {/* Direct Service Form - The centerpiece of the sidebar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-b from-electric-sapphire/40 to-transparent blur-2xl opacity-20 transition-opacity"></div>
                <div className="relative">
                  <ServiceContactForm defaultService={title} title="Secure Entry Form" />
                </div>
              </motion.div>

              {advantages && (
                <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[48px] border border-electric-sapphire/10 space-y-8 md:space-y-10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-electric-sapphire scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-lg md:text-xl font-black text-deep-navy uppercase tracking-widest border-b border-deep-navy/10 pb-4 md:pb-6">{advantagesTitle}</h3>
                  <ul className="space-y-4 md:space-y-6">
                    {advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start gap-4 group/item">
                        <CheckCircle2 className="text-electric-sapphire w-4 h-4 shrink-0 mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                        <span className="text-deep-navy/80 font-medium text-xs md:text-sm leading-relaxed group-hover/item:text-deep-navy transition-colors">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Expert Hotline - Compact */}
              <div className="bg-white p-8 rounded-[40px] flex items-center justify-between group cursor-pointer overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-electric-sapphire translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                 <div className="relative z-10 space-y-1">
                    <p className="text-black/40 font-black uppercase text-[10px] tracking-[0.2em] group-hover:text-black/60 transition-colors">Direct Desk</p>
                    <div className="flex flex-col">
                      <a href="tel:+971 54 129 0038" className="text-black text-lg font-black tracking-tighter hover:underline">
                        +971 54 129 0038
                      </a>
                      <a href="tel:+971566850911" className="text-black text-lg font-black tracking-tighter hover:underline">
                        +971 56 685 0911
                      </a>
                    </div>
                 </div>
                 <div className="relative z-10 w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-electric-sapphire group-hover:bg-white group-hover:text-black transition-all shadow-lg rotate-3 group-hover:rotate-0">
                    <Phone size={22} strokeWidth={2.5} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
