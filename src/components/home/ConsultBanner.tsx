'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ConsultBanner() {
  return (
    <section className="relative h-[480px] sm:h-[560px] flex items-center justify-center overflow-hidden border-y border-slate-800">
      {/* Background image from website assets */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/consult-banner.jpg"
          alt="Consultancy and Strategy Session"
          fill
          className="object-cover object-center scale-105"
        />
        {/* Dark overlays to maintain exact screenshot aesthetic */}
        <div className="absolute inset-0 bg-[#080C15]/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C15] via-transparent to-[#080C15]" />
      </div>

      {/* Giant Typography matching screenshot */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 select-none">
        <span className="text-[15vw] font-black tracking-[0.25em] text-white/[0.12] sm:text-white/[0.16] uppercase leading-none font-mono">
          CONSULT
        </span>
      </div>

      {/* Foreground Content & Button */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-brand-400 mb-3">
            Strategic Advisory &amp; Luxury Operations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-8">
            Transform Your Brand With Expert Guidance
          </h2>

          {/* Button matching screenshot "Explore more" */}
          <Link
            href="/services/consultancy"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-glow-cyan hover:scale-105 group"
          >
            <span>Explore more</span>
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
