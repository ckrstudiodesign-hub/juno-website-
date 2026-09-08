"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Building2, Landmark, Globe2, Briefcase, FileText } from 'lucide-react';
import Link from 'next/link';

interface ZoneFeature {
  feature: string;
  desc: string;
  dmcc: boolean | string;
  ifza: boolean | string;
  spc: boolean | string;
  meydan: boolean | string;
  jafza: boolean | string;
}

const features: ZoneFeature[] = [
  { feature: "Physical Office Required", desc: "Mandatory office space requirements", dmcc: "Yes (Flexi/Physical)", ifza: "No", spc: "No", meydan: "No", jafza: "Yes" },
  { feature: "Share Capital Required", desc: "Upfront capital deposit", dmcc: "AED 50,000", ifza: "None", spc: "None", meydan: "None", jafza: "AED 50,000" },
  { feature: "Visa Allocation", desc: "Visas allowed without physical office", dmcc: "Up to 3", ifza: "Up to 7", spc: "Up to 7", meydan: "Up to 3", jafza: "Based on office size" },
  { feature: "NOC Required", desc: "NOC from current sponsor", dmcc: false, ifza: false, spc: false, meydan: true, jafza: false },
  { feature: "Corporate Bank Account", desc: "Ease of account opening", dmcc: "High", ifza: "Medium", spc: "Medium", meydan: "Medium", jafza: "High" },
];

const zones = [
  { id: 'dmcc', name: 'DMCC', icon: <Landmark className="w-5 h-5" /> },
  { id: 'ifza', name: 'IFZA', icon: <Globe2 className="w-5 h-5" /> },
  { id: 'spc', name: 'SPC', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'meydan', name: 'Meydan', icon: <Building2 className="w-5 h-5" /> },
  { id: 'jafza', name: 'JAFZA', icon: <FileText className="w-5 h-5" /> },
];

export default function FreeZoneComparison() {
  const [selectedZones, setSelectedZones] = useState<string[]>(['dmcc', 'ifza', 'spc']);

  const toggleZone = (zoneId: string) => {
    if (selectedZones.includes(zoneId)) {
      if (selectedZones.length > 2) { // Keep at least 2 for comparison
        setSelectedZones(selectedZones.filter(z => z !== zoneId));
      }
    } else {
      if (selectedZones.length < 4) { // Max 4 to avoid crowding
        setSelectedZones([...selectedZones, zoneId]);
      }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-sapphire/10 text-electric-sapphire font-black tracking-widest text-[10px] uppercase mb-6"
          >
             Compare Jurisdictions
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-deep-navy tracking-tighter uppercase leading-none mb-6"
          >
            Free Zone <span className="text-electric-sapphire">Comparison</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-deep-navy/70 text-lg font-light max-w-2xl mx-auto"
          >
            Compare selected zones by activity, office requirements, visa limits, and capital considerations to find your perfect fit.
          </motion.p>
        </div>

        {/* Zone Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
           {zones.map(zone => (
             <button
               key={zone.id}
               onClick={() => toggleZone(zone.id)}
               className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${selectedZones.includes(zone.id) ? 'bg-electric-sapphire text-white shadow-lg' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
             >
               {zone.icon}
               {zone.name}
             </button>
           ))}
        </div>
        
        <div className="text-center mb-8">
           <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Select up to 4 zones to compare</span>
        </div>

        {/* Comparison Table */}
        <div className="w-full overflow-x-auto pb-8">
          <div className="min-w-[800px] bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
             {/* Header */}
             <div className="flex bg-gray-50 border-b border-gray-100">
                <div className="w-1/3 p-6">
                  <h4 className="text-sm font-black uppercase tracking-widest text-deep-navy">Feature</h4>
                </div>
                {zones.filter(z => selectedZones.includes(z.id)).map(zone => (
                  <div key={zone.id} className="flex-1 p-6 text-center border-l border-gray-100">
                    <h4 className="text-sm font-black uppercase tracking-widest text-electric-sapphire">{zone.name}</h4>
                  </div>
                ))}
             </div>
             
             {/* Rows */}
             {features.map((item, idx) => (
                <div key={idx} className="flex border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <div className="w-1/3 p-6 flex flex-col justify-center">
                    <span className="text-[15px] font-bold text-deep-navy">{item.feature}</span>
                    <span className="text-xs text-gray-500 mt-1">{item.desc}</span>
                  </div>
                  {zones.filter(z => selectedZones.includes(z.id)).map(zone => (
                    <div key={zone.id} className="flex-1 p-6 text-center border-l border-gray-50 flex items-center justify-center">
                      {typeof item[zone.id as keyof ZoneFeature] === 'boolean' ? (
                        item[zone.id as keyof ZoneFeature] ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm font-medium text-deep-navy">{String(item[zone.id as keyof ZoneFeature])}</span>
                      )}
                    </div>
                  ))}
                </div>
             ))}
          </div>
        </div>

        <div className="text-center mt-12">
           <Link 
             href="/dubai-free-zone-company-overview"
             className="inline-flex items-center gap-2 px-8 py-4 bg-deep-navy text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-electric-sapphire transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
           >
             View All Free Zones
           </Link>
        </div>
      </div>
    </section>
  );
}
