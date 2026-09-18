'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Target, Users, Sparkles, MapPin, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function AboutPage() {
  const milestones = [
    { year: '2014', title: 'Agency Foundation', desc: 'Established in Dubai as a boutique communications and brand management agency.' },
    { year: '2017', title: 'Industrial Production Expansion', desc: 'Launched our dedicated printing & fabrication facility in Ajman Industrial Area.' },
    { year: '2020', title: 'Digital PR & Performance Dominance', desc: 'Established national media partnerships with Khaleej Times, Gulf News, and Zawya.' },
    { year: '2023', title: 'Sharjah Creative Studio', desc: 'Opened regional content and digital production hub at Sharjah Media City (Shams).' },
    { year: '2024+', title: 'Autonomous AI Transformation', desc: 'Pioneered 24/7 bilingual AI Customer Care & Sales Agents and generative creative workflows.' },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#080C15] text-slate-100">
      {/* Hero Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-brand-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-6"
          >
            <Award size={16} className="text-brand-400" />
            <span>Over a Decade of Strategic Excellence in Dubai</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Connecting Brands to <br className="hidden sm:block" />
            <span className="gradient-text-cyan">Their Target Consumers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover Engage Marketing Solutions, a Dubai-based agency crafting innovative strategies that elevate brands and foster meaningful relationships with audiences across the Gulf and global markets.
          </motion.p>
        </div>
      </section>

      {/* Story & Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative h-[460px] rounded-3xl overflow-hidden glass-card border border-slate-700 shadow-2xl">
                <Image
                  src="/images/about-hourglass.jpg"
                  alt="Engage Marketing Agency Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C15] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-brand-400">Our Heritage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Where Human Ingenuity Meets Cutting-Edge Intelligence
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Welcome to Engage, your premier partner in building connections between brands and their target consumers. Located in the bustling heart of Dubai, UAE, Engage is dedicated to providing comprehensive solutions that elevate brands and foster meaningful relationships with their audiences. We are a marketing solutions and communications agency serving businesses in the local and international markets.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Our holistic approach eliminates the friction of juggling multiple vendors. Whether you require autonomous 24/7 AI customer care agents, precision high-ROAS digital campaigns, high-end jewelry consultancy, or physical industrial printing manufactured in our own UAE plant, we provide single-source accountability.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                {siteConfig.company.stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <span className="block text-2xl font-black text-brand-400">{stat.value}</span>
                    <span className="block text-xs text-slate-400 mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic UAE Hubs */}
      <section className="py-20 bg-[#060912] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-400">Strategic Presence</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
              Three Specialized Hubs Across the UAE
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Strategically distributed infrastructure allowing seamless synergy between executive advisory, digital marketing, and industrial production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.locations.map((loc, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-card border border-slate-700/80 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-6">
                    <MapPin size={24} />
                  </div>
                  <span className="text-xs font-mono text-brand-400 uppercase tracking-wider block mb-1">
                    {loc.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{loc.name}</h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {loc.address}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Operating Hours:</span>
                  <span className="text-brand-300 font-medium">{loc.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-400">Evolution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Our Journey Over a Decade
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-800">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex items-start gap-8 pl-4">
                <div className="w-9 h-9 rounded-full bg-brand-500 text-dark-surface font-black text-xs flex items-center justify-center shrink-0 z-10 shadow-glow-cyan">
                  {m.year.slice(2)}
                </div>
                <div className="flex-1 p-6 rounded-2xl glass-card border border-slate-800">
                  <span className="text-xs font-mono text-brand-400 font-bold">{m.year}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{m.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
          Ready to Connect Your Brand with Measurable Growth?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-sm uppercase tracking-wider transition-all shadow-glow-cyan hover:scale-105"
        >
          <span>Schedule an Executive Discovery Session</span>
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
