'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function PortfolioTeaser() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-4">
              <Sparkles size={14} className="text-brand-400" />
              <span>Proven Track Record</span>
            </div>
            {/* Heading matching screenshot */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our <span className="gradient-text-cyan">Work</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl">
              A curated selection of campaigns, brand evolutions, and AI integrations built for ambitious market leaders.
            </p>
          </div>

          <Link
            href="/work"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-brand-400 hover:text-brand-300 uppercase tracking-wider group"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.portfolio.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-slate-700/70 hover:border-brand-500/60 transition-all duration-500 hover:shadow-glow-cyan flex flex-col justify-between"
            >
              {/* Image with zoom effect */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dark-surface/80 backdrop-blur-md text-brand-300 border border-brand-500/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight size={20} className="text-slate-500 group-hover:text-brand-400 transition-colors" />
                  </h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <span className="block text-xl font-black text-brand-400">{m.value}</span>
                      <span className="block text-xs text-slate-400">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
