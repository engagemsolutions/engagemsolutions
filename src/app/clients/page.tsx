'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function ClientsPage() {
  const testimonials = [
    {
      quote: "Engage completely revolutionized our digital presence. Their specialized understanding of luxury jewelry clienteling combined with ultra-fast AI support helped us scale showroom consultations by over 400%.",
      author: "Farhad S.",
      role: "Managing Director, Setare Diamonds",
      category: "JEWELLERY",
    },
    {
      quote: "Managing corporate communications across the GCC requires speed and high editorial standards. Engage secured top-tier press in Khaleej Times and Zawya within days of our announcement.",
      author: "Elena M.",
      role: "VP Marketing, Excelltra Corporate Solutions",
      category: "RETAIL & SERVICE SECTOR",
    },
    {
      quote: "From our luxury product packaging to targeted high-ROAS social ads, Engage delivers single-source consistency that is rare to find anywhere else in Dubai.",
      author: "Tariq K.",
      role: "Founder, The Artful Hands Studio",
      category: "FOOD & BEVERAGE",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-transparent text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-brand-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles size={16} className="text-brand-400" />
            <span>Trusted Partnerships</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="gradient-text-cyan">Clients</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See the real brands behind Engage Marketing Solutions across Dubai, the GCC, and internationally. Discover leading enterprises we have partnered with in branding, campaigns, and communications.
          </p>
        </div>
      </section>

      {/* Categorized Sectors matching live site */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {siteConfig.clientCategories.map((cat, idx) => (
            <div key={idx} className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-800 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-400 block mb-1">
                    Industry Sector {idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {cat.category}
                  </h2>
                </div>
                <p className="text-sm text-slate-400 mt-2 md:mt-0 max-w-md">
                  {cat.description}
                </p>
              </div>

              {/* Brands Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {cat.brands.map((brandName, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-brand-500/40 text-center flex flex-col items-center justify-center min-h-[110px] group transition-all hover:scale-105"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-brand-300 transition-colors">
                      {brandName}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                      Partner Brand
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-transparent border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-400">Executive Testimonials</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl glass-card border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <span className="block text-sm font-bold text-white">{item.author}</span>
                  <span className="block text-xs text-slate-400">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Join the Leading Brands Partnered with Engage
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-sm uppercase tracking-wider shadow-glow-cyan hover:scale-105 transition-all"
        >
          <span>Connect with Our Dubai Leadership</span>
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
