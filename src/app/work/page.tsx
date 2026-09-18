'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Jewellery', 'Corporate', 'Digital Marketing', 'Events'];

  const filteredProjects = selectedCategory === 'All'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-[#080C15] text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-brand-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles size={16} className="text-brand-400" />
            <span>Demonstrated Market Results</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Our Latest <span className="gradient-text-cyan">Work &amp; Portfolio</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Discover Engage Marketing Solutions&apos; portfolio, featuring our latest branding, strategy, high-ROAS campaigns, and luxury events across Dubai, the GCC, and worldwide.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-400 text-dark-surface shadow-glow-cyan'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="rounded-3xl overflow-hidden glass-card border border-slate-800 hover:border-brand-500/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-glow-cyan"
              >
                <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1424] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-dark-surface/85 backdrop-blur-md text-brand-300 border border-brand-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                      Client: {project.client}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.highlights.map((h, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <span className="block text-2xl font-black text-brand-400">{m.value}</span>
                        <span className="block text-xs text-slate-400">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 mt-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-800 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Have a High-Stakes Project in Mind?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Let us engineer a custom campaign combining intelligent AI automation, performance media, and luxury design.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-bold text-xs uppercase tracking-wider shadow-glow-cyan transition-all"
          >
            <span>Start Your Discovery Call</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
