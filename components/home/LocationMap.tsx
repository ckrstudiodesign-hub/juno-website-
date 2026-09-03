import React from 'react';
import Image from 'next/image';

export default function LocationMap() {
  return (
    <section className="py-10 relative overflow-hidden bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <span className="text-[#0077B6] font-black tracking-[0.5em] uppercase text-xs">Our Location</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter uppercase">
              Visit us on <span className="text-[#00B4D8]">Google Maps</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-xl">
              Find our office location directly on the map and open directions in one tap.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://share.google/D7vXAY3lmRRJu2UDN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium !px-8 !py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,119,182,0.2)]"
              >
                Open Directions
              </a>
              <a
                href="https://share.google/D7vXAY3lmRRJu2UDN"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black/10 px-8 py-4 rounded-2xl font-black text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-sm"
              >
                View Exact Pin
              </a>
            </div>
            <div className="rounded-3xl border border-black/10 bg-gray-50 p-6 shadow-sm max-w-xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0077B6] mb-3">Coordinates</p>
              <p className="text-gray-900 font-black text-lg">25.193375, 55.260395</p>
              <p className="text-gray-500 text-sm mt-2 font-medium">106 Sheikh Zayed Rd - Trade Center First - Dubai, Aspin Commercial Tower</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="h-[420px] md:h-[520px] w-full relative overflow-hidden rounded-[36px] border border-black/10 shadow-[0_30px_60px_rgba(0,0,0,0.1)] bg-gray-100">
              <iframe
                title="Juno BizHub Exact Location"
                src="https://www.google.com/maps?q=Aspin+Commercial+Tower+Dubai&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-90 transition-all duration-1000 grayscale hover:grayscale-0"
              />

              <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 border border-black/10 shadow-xl max-w-sm">
                <p className="text-gray-900 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs leading-relaxed">
                  106 Sheikh Zayed Rd - Trade Center First - Dubai, Aspin Commercial Tower
                </p>
                <a
                  href="https://share.google/D7vXAY3lmRRJu2UDN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077B6] text-xs md:text-sm font-bold hover:text-[#005f92] transition-colors mt-2 inline-block uppercase tracking-widest"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
