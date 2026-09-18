'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  Phone,
} from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

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

export default function ServicesHubPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-digital' | 'creative' | 'physical'>('all');

  const filterServices = () => {
    if (activeFilter === 'ai-digital') {
      return siteConfig.services.filter((s) =>
        ['ai-agents', 'digital-marketing', 'ecommerce', 'customer-value-management'].includes(s.id)
      );
    }
    if (activeFilter === 'creative') {
      return siteConfig.services.filter((s) =>
        ['brand-management', 'digital-pr', 'ai-designs', 'consultancy'].includes(s.id)
      );
    }
    if (activeFilter === 'physical') {
      return siteConfig.services.filter((s) =>
        ['printing-production', 'event-management'].includes(s.id)
      );
    }
    return siteConfig.services;
  };

  return (
    <div className="pt-28 pb-24 bg-[#080C15] text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-brand-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles size={16} className="text-brand-400" />
            <span>Integrated Agency Methodologies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Our Marketing &amp; <span className="gradient-text-cyan">AI Solutions</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore Engage Marketing Solutions&apos; full suite in Dubai, including AI Customer Care &amp; Sales Agents, Digital Marketing, E-commerce, Brand Management, Digital PR, Printing &amp; Production, Events, and Luxury Consultancy.
          </p>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {[
              { key: 'all', label: 'All Capabilities (10)' },
              { key: 'ai-digital', label: 'AI & Performance' },
              { key: 'creative', label: 'Brand & Digital PR' },
              { key: 'physical', label: 'Physical Production & Events' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.key
                    ? 'bg-brand-400 text-dark-surface shadow-glow-cyan'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterServices().map((service) => {
              const IconComponent = iconMap[service.iconName] || Bot;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl p-8 glass-card border border-slate-800 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-glow-cyan"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-dark-surface transition-colors shadow-glow-cyan">
                        <IconComponent size={28} />
                      </div>
                      {service.featured && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/40">
                          Flagship
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs font-medium text-brand-400 mb-4 line-clamp-1">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-8 pt-4 border-t border-slate-800">
                      {service.features.slice(0, 3).map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={15} className="text-brand-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-brand-400 text-slate-200 group-hover:text-dark-surface font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800"
                  >
                    <span>View Specifications &amp; Pricing</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 mt-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-800 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Need a Tailored Multi-Service Proposal?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Our strategic leadership in Dubai reviews your requirements to formulate an integrated scope combining AI automation, digital media, and physical production.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-bold text-xs uppercase tracking-wider shadow-glow-cyan transition-all"
            >
              Request Custom Proposal
            </Link>
            <a
              href={siteConfig.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Phone size={14} />
              <span>WhatsApp Strategy Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
