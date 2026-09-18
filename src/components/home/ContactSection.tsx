'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/config/siteConfig';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.firstName,
          email: formData.email,
          message: formData.message,
          source: 'Homepage Contact Form',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 },
          });
        } catch (e) {}
      } else {
        setErrorMsg('Failed to send message. Please reach us directly on WhatsApp.');
      }
    } catch (err) {
      setErrorMsg('Connection error. Please try again or message via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#080C15] relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column matching screenshot */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Get In Touch
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Reach out for marketing information or consultation
            </p>

            <div className="space-y-6 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3.5 text-slate-300">
                <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">Direct Inquiries / WhatsApp</span>
                  <a href={`tel:${siteConfig.company.rawPhone}`} className="text-base font-semibold text-white hover:text-brand-400 transition-colors">
                    {siteConfig.company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-300">
                <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">Email Address</span>
                  <a href={`mailto:${siteConfig.company.email}`} className="text-base font-semibold text-white hover:text-brand-400 transition-colors">
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-300">
                <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">Main Headquarters</span>
                  <span className="text-sm text-slate-300">
                    Motor City, Dubai, United Arab Emirates
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form matching screenshot fields */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-card border border-slate-700/80 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center mx-auto border border-brand-500/30 shadow-glow-cyan">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your inquiry has been received. A senior marketing strategist from our Dubai team will review your requirements and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstName: '', email: '', message: '' });
                    }}
                    className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                      Message*
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-rose-400 text-xs">{errorMsg}</p>
                  )}

                  {/* Submit Button matching screenshot */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-400 hover:bg-brand-300 text-dark-surface font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-glow-cyan hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
