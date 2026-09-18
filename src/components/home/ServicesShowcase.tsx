'use client';

import { useState } from 'react';
import Link from 'next/link';
import Illustration from '@/components/ui/Illustration';
import { motion } from 'framer-motion';
import {
  Bot,
  TrendingUp,
  ShoppingBag,
  ShieldCheck,
  Megaphone,
  Sparkles,
  Printer,
  CalendarDays,
  HeartHandshake,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig, ServiceItem } from '@/config/siteConfig';

const iconMap: Record<string, any> = {
  Bot,
  TrendingUp,
  ShoppingBag,
  ShieldCheck,
  Megaphone,
  Sparkles,
  Printer,
  CalendarDays,
  HeartHandshake,
  Briefcase,
};

export default function ServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState<'flagship' | 'all'>('flagship');

  const flagshipServices = siteConfig.services.filter((s) => s.featured);
  const otherServices = siteConfig.services.filter((s) => !s.featured);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="services">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-4">
            <Sparkles size={14} className="text-brand-400" />
            <span>Comprehensive Agency Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Intelligent Services Built to <span className="gradient-text-cyan">Scale Brands</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From autonomous 24/7 AI sales agents and data-driven digital marketing to physical industrial printing across the UAE, we deliver end-to-end commercial momentum.
          </p>

          {/* Toggle Switch */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveCategory('flagship')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'flagship'
                  ? 'bg-brand-400 text-dark-surface shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Flagship AI &amp; Digital (3)
            </button>
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-brand-400 text-dark-surface shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Agency Suite (10)
            </button>
          </div>
        </div>

        {/* 3 Flagship Services Display */}
        {activeCategory === 'flagship' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {flagshipServices.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Bot;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative rounded-3xl p-8 glass-card border border-slate-700/80 hover:border-brand-400/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glow-cyan"
                >
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-dark-surface transition-all duration-300 shadow-glow-cyan">
                        <Illustration kind={service.iconName} className="w-12 h-12" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-brand-300 border border-slate-700">
                        {service.tagline.split(' ')[0]} Focus
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-6">
                      {service.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 size={16} className="text-brand-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Performance Benchmarks */}
                    {service.stats && (
                      <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                        {service.stats.slice(0, 2).map((st, i) => (
                          <div key={i} className="text-center">
                            <span className="block text-lg font-black text-brand-400">{st.value}</span>
                            <span className="block text-[10px] text-slate-400">{st.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800/80 group-hover:bg-brand-400 text-slate-200 group-hover:text-dark-surface font-bold text-xs uppercase tracking-wider transition-all duration-300"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Full 10 Services Suite Display */}
        {activeCategory === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Briefcase;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-2xl p-6 glass-card border border-slate-800 hover:border-brand-500/50 hover:bg-slate-900/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mb-4 group-hover:bg-brand-500 group-hover:text-dark-surface transition-colors">
                      <Illustration kind={service.iconName} className="w-10 h-10" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 pt-2 border-t border-slate-800"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA to Services Hub */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-400 hover:text-brand-300 uppercase tracking-wider group"
          >
            <span>Explore All 10 EngageM Service Methodologies</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
