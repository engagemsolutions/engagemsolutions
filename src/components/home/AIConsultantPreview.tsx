'use client';

import { Sparkles, Bot, ArrowRight, MessageSquareCode } from 'lucide-react';
import { motion } from 'framer-motion';

interface AIConsultantPreviewProps {
  onOpenAIConsultant?: () => void;
}

export default function AIConsultantPreview({ onOpenAIConsultant }: AIConsultantPreviewProps) {
  const quickQuestions = [
    "How can 24/7 AI agents handle inbound WhatsApp sales?",
    "What are EngageM's digital marketing packages in the UAE?",
    "How do you optimize luxury jewelry e-commerce conversion rates?",
  ];

  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 glass-card border border-brand-500/30 overflow-hidden shadow-2xl">
          {/* Subtle Cyber Grid Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-4">
                <Sparkles size={14} className="text-brand-400 animate-pulse" />
                <span>Next-Gen Agency Intelligence</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Meet the EngageM <span className="gradient-text-cyan">AI Business Consultant</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Need instant answers about service deliverables, campaign scopes, or pricing guidance? Our autonomous agent is available 24/7, trained on EngageM&apos;s verified capabilities and regional market knowledge.
              </p>

              <div className="space-y-2 mb-6">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={onOpenAIConsultant}
                    className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-brand-500/15 border border-slate-800 hover:border-brand-500/30 text-xs sm:text-sm text-slate-300 hover:text-brand-300 transition-all flex items-center justify-between group"
                  >
                    <span>&ldquo;{q}&rdquo;</span>
                    <ArrowRight size={14} className="text-slate-500 group-hover:text-brand-400 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-gradient-to-b from-brand-950/40 to-slate-900/60 border border-brand-500/20">
              <div className="w-20 h-20 rounded-3xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 mb-4 shadow-glow-cyan">
                <Bot size={40} className="animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Interactive Strategy Assistant</h3>
              <p className="text-xs text-slate-400 mb-6 max-w-xs">
                Ask questions, receive immediate recommendations, and qualify your project in minutes.
              </p>
              <button
                onClick={onOpenAIConsultant}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-xs uppercase tracking-wider transition-all shadow-glow-cyan hover:scale-105"
              >
                Launch AI Consultant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
