'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/config/siteConfig';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Customer Care & Sales Agents',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email && !formData.phone) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Dedicated Contact Page',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (e) {}
      } else {
        setErrorMsg('Failed to submit. Please contact us directly on WhatsApp.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again or message us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-transparent text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-brand-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles size={16} className="text-brand-400" />
            <span>Connect with Dubai&apos;s Marketing Pioneers</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Contact <span className="gradient-text-cyan">Engage Marketing</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Looking for a leading marketing agency in Dubai? Reach out to discuss your branding, communication, AI automation, and marketing needs with our executive team.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: UAE Locations & Hours from live site */}
            <div className="lg:col-span-5 space-y-8">
              {/* WhatsApp Quick Card */}
              <div className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider block">
                    Instant Messaging
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">WhatsApp Direct Line</h3>
                  <p className="text-xs text-slate-300 mt-1">{siteConfig.company.phone}</p>
                </div>
                <a
                  href={siteConfig.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle size={16} />
                  <span>Chat Now</span>
                </a>
              </div>

              {/* Operating Hours from live site */}
              <div className="p-6 rounded-3xl glass-card border border-slate-800">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-brand-400" />
                  Operating Business Hours
                </h3>
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Monday - Friday:</span> 9:00 AM - 6:00 PM (GST)
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Ajman Production Plant operates Monday - Saturday.
                </p>
              </div>

              {/* Verified Locations from live site */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={16} className="text-brand-400" />
                  Our Location &amp; Facilities
                </h3>

                {siteConfig.locations.map((loc, idx) => (
                  <div key={idx} className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-brand-500/40 transition-colors">
                    <span className="text-[11px] font-mono font-bold text-brand-400 uppercase tracking-wider block mb-1">
                      {loc.name}
                    </span>
                    <span className="text-sm font-semibold text-white block mb-1">
                      {loc.address}
                    </span>
                    <span className="text-xs text-slate-400 block">
                      {loc.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Comprehensive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-700/80 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center mx-auto border border-brand-500/40 shadow-glow-cyan">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to Engage Marketing Solutions. A senior strategist from our Dubai office will review your specifications and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: 'AI Customer Care & Sales Agents', message: '' });
                      }}
                      className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">
                      Request a Strategy Consultation
                    </h3>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                        Full Name / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Al-Maktoum / Swiss Gold Int."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                        Service of Primary Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      >
                        {siteConfig.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                        Project Overview &amp; Goals *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your brand, timeline, and current marketing objectives..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                      />
                    </div>

                    {errorMsg && <p className="text-rose-400 text-xs">{errorMsg}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-10 py-4 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-sm uppercase tracking-wider shadow-glow-cyan transition-all hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Strategy Request</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
