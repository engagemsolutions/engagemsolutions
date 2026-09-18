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
  MessageSquare,
  Zap,
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

export default function ServiceDetailView({ service }: { service: ServiceItem }) {
  const IconComponent = iconMap[service.iconName] || Bot;
  const otherServices = siteConfig.services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-[#080C15] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-brand-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-brand-400 font-medium">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-4">
                <IconComponent size={14} className="text-brand-400" />
                <span>Specialized Agency Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-2xl font-medium text-brand-300 mb-6 leading-relaxed">
                {service.tagline}
              </p>

              <p className="text-base text-slate-300 leading-relaxed max-w-3xl mb-8">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-xs uppercase tracking-wider shadow-glow-cyan hover:scale-105 transition-all"
                >
                  Request Proposal for {service.title}
                </Link>
                <a
                  href={siteConfig.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Phone size={14} className="text-brand-400" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>

            {/* Benchmarks Card */}
            <div className="lg:col-span-4">
              <div className="p-8 rounded-3xl glass-card border border-slate-700 shadow-2xl space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Zap size={18} className="text-brand-400" />
                  Performance Metrics
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {(service.stats || [
                    { value: "100%", label: "Satisfaction Guarantee" },
                    { value: "GCC", label: "Regional Coverage" },
                  ]).map((st, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <span className="block text-3xl font-black text-brand-400">{st.value}</span>
                      <span className="block text-xs text-slate-400 mt-1">{st.label}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-brand-950/30 border border-brand-500/20 text-xs text-slate-300 leading-relaxed">
                  Engineered and managed from our Dubai Headquarters with nationwide UAE delivery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Deliverables Detailed Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles size={22} className="text-brand-400" />
                Strategic Capabilities
              </h2>
              <ul className="space-y-4">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 size={18} className="text-brand-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck size={22} className="text-brand-400" />
                What We Deliver
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <div className="w-6 h-6 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#060A13] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Complementary Agency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => {
              const OtherIcon = iconMap[other.iconName] || Bot;
              return (
                <Link
                  key={other.id}
                  href={`/services/${other.slug}`}
                  className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-brand-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-dark-surface transition-colors">
                    <OtherIcon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {other.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
