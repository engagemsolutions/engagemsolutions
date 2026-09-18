'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, ArrowRight, Video, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

interface HeroSectionProps {
  onOpenAIConsultant?: () => void;
}

export default function HeroSection({ onOpenAIConsultant }: HeroSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [videoSource, setVideoSource] = useState<string>('/videos/Backgroundvideo.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Video with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          key={videoSource}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        >
          <source src={videoSource} type="video/mp4" />
        </video>

        {/* Cinematic multi-gradient overlays for legibility and luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C15] via-[#080C15]/75 to-[#080C15]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C15]/80 via-transparent to-[#080C15]/80" />
        <div className="absolute inset-0 radial-glow-cyan opacity-40 pointer-events-none" />
      </div>

      {/* Hero Controls: Mute toggle & Video switcher */}
      <div className="absolute top-28 right-6 sm:right-10 z-20 flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700/70 text-slate-300 hover:text-brand-400 hover:border-brand-500/50 backdrop-blur-md transition-all"
          title={isMuted ? 'Unmute Video' : 'Mute Video'}
          aria-label="Toggle audio"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-brand-400" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Dubai Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-6 shadow-glow-cyan"
        >
          <Sparkles size={16} className="text-brand-400 animate-pulse" />
          <span>Dubai&apos;s Premier AI-Driven Marketing &amp; Communications Agency</span>
        </motion.div>

        {/* Title from Screenshots */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
        >
          Connecting <span className="gradient-text-cyan">Brands</span>
        </motion.h1>

        {/* Subtitle from Screenshots */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-lg sm:text-2xl md:text-3xl font-medium text-slate-200 mb-8 max-w-3xl leading-relaxed drop-shadow-md"
        >
          Marketing Solutions &amp; Communications Agency
        </motion.p>

        {/* Value Proposition snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-sm sm:text-base text-slate-300/90 max-w-2xl mb-10 leading-relaxed drop-shadow"
        >
          Fusing high-converting AI customer care agents, precision digital marketing, and enterprise e-commerce systems with in-house UAE production excellence.
        </motion.p>

        {/* CTAs matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA "Engage us" */}
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-glow-cyan hover:shadow-glow-cyan-lg hover:scale-105 group"
          >
            <span>Engage us</span>
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Secondary AI Consultant CTA */}
          <button
            onClick={onOpenAIConsultant}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold text-sm sm:text-base border border-slate-700 hover:border-brand-500/50 transition-all duration-300 hover:scale-105 gap-2.5"
          >
            <Sparkles size={18} className="text-brand-400" />
            <span>Consult EngageM AI</span>
          </button>
        </motion.div>

        {/* Live Agency Stats Floating Pill */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl p-4 sm:p-6 rounded-3xl glass-card border border-slate-700/60 shadow-2xl"
        >
          {siteConfig.company.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium text-center mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
