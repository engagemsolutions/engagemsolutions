'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award, Users, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Glass Frame & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[648/290] rounded-3xl overflow-hidden glass-card border border-slate-700/80 shadow-2xl group">
              <Image
                src="/images/about-hourglass.jpg"
                alt="About Engage - Hand holding hourglass"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 glass-card p-4 rounded-2xl border border-brand-500/40 shadow-glow-cyan flex items-center gap-3 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-black text-xl">
                10+
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider">Years of Impact</span>
                <span className="block text-[11px] text-slate-400">Serving Dubai &amp; Global Markets</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Content from Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-4">
              <Award size={14} className="text-brand-400" />
              <span>Agency Heritage &amp; Vision</span>
            </div>

            {/* Heading matching screenshot */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              About <span className="gradient-text-cyan">Engage</span>
            </h2>

            {/* Text matching screenshot and reference website */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Welcome to Engage, your premier partner in building connections between brands and their target consumers. Located in the bustling heart of Dubai, UAE, Engage is dedicated to providing comprehensive solutions that elevate brands and foster meaningful relationships with their audiences. We are a marketing solutions and communications agency serving businesses in the local and international markets.
            </p>

            {/* Agency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-brand-400 shrink-0" />
                <span>Strategic Headquarters in Motor City, Dubai</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-brand-400 shrink-0" />
                <span>Bespoke AI &amp; Enterprise LLM Workflows</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-brand-400 shrink-0" />
                <span>In-House Industrial Printing Facility in Ajman</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-brand-400 shrink-0" />
                <span>Tier-1 GCC Media Outreach &amp; Digital PR</span>
              </div>
            </div>

            {/* Button matching screenshot */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-glow-cyan hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full glass-card hover:bg-white/10 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
