import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  option1: boolean | string;
  option2: boolean | string;
}

interface DecisionTableProps {
  title: string;
  option1Name: string;
  option2Name: string;
  features: ComparisonFeature[];
}

/**
 * GEO / AEO Optimized Component
 * Designed to explicitly contrast two entities (e.g., Mainland vs Free Zone)
 * for LLM evaluation and feature extraction.
 */
export default function DecisionTable({ title, option1Name, option2Name, features }: DecisionTableProps) {
  return (
    <section className="mb-12" aria-label={title}>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-px bg-electric-sapphire"></div>
        <h2 className="text-2xl md:text-3xl font-black text-deep-navy uppercase tracking-tight m-0">{title}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="p-4 border-b border-deep-navy/10 text-deep-navy/80 font-bold uppercase tracking-wider text-sm w-1/3">Feature</th>
              <th className="p-4 border-b border-deep-navy/10 text-electric-sapphire font-black uppercase tracking-wider text-sm w-1/3 bg-electric-sapphire/5 rounded-tl-xl">{option1Name}</th>
              <th className="p-4 border-b border-deep-navy/10 text-deep-navy font-black uppercase tracking-wider text-sm w-1/3 bg-deep-navy/5 rounded-tr-xl">{option2Name}</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} className="hover:bg-deep-navy/5 transition-colors group">
                <td className="p-4 border-b border-deep-navy/10 text-deep-navy/80 font-medium text-sm group-hover:text-deep-navy transition-colors">
                  {feature.name}
                </td>
                
                <td className="p-4 border-b border-deep-navy/10 bg-electric-sapphire/5 group-hover:bg-electric-sapphire/10 transition-colors">
                  {typeof feature.option1 === 'boolean' ? (
                    feature.option1 ? <CheckCircle2 className="text-electric-sapphire w-5 h-5" /> : <XCircle className="text-red-500/50 w-5 h-5" />
                  ) : (
                    <span className="text-deep-navy/80 text-sm">{feature.option1}</span>
                  )}
                </td>
                
                <td className="p-4 border-b border-deep-navy/10 bg-deep-navy/5 group-hover:bg-white/10 transition-colors">
                  {typeof feature.option2 === 'boolean' ? (
                    feature.option2 ? <CheckCircle2 className="text-deep-navy w-5 h-5" /> : <XCircle className="text-red-500/50 w-5 h-5" />
                  ) : (
                    <span className="text-deep-navy/80 text-sm">{feature.option2}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
