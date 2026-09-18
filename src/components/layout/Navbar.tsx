'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

interface NavbarProps {
  onOpenAIConsultant?: () => void;
}

export default function Navbar({ onOpenAIConsultant }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-2xl backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative w-36 sm:w-44 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt={siteConfig.company.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(d => pathname === d.href));
              const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

              if (hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                        isActive
                          ? 'text-brand-400 bg-white/5'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180 text-brand-400' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-0 mt-2 rounded-2xl glass-card p-3 shadow-2xl border border-slate-700/60 z-50 ${
                            item.name === 'Services' ? 'w-[360px] grid grid-cols-1 gap-1' : 'w-56 flex flex-col gap-1'
                          }`}
                        >
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="group/item flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
                            >
                              <div className="flex flex-col">
                                <span className="text-sm font-medium group-hover/item:text-brand-400 transition-colors">
                                  {subItem.name}
                                </span>
                              </div>
                              {subItem.badge ? (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                                  {subItem.badge}
                                </span>
                              ) : (
                                <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 text-brand-400 transition-opacity" />
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-brand-400 bg-white/5'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* AI Consultant Trigger */}
            <button
              onClick={onOpenAIConsultant}
              className="relative group flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-brand-500/10 hover:bg-brand-500/20 text-brand-300 border border-brand-500/30 shadow-glow-cyan transition-all"
            >
              <Sparkles size={14} className="text-brand-400 animate-pulse" />
              <span>AI Consultant</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
            </button>

            {/* Engage Us CTA */}
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-dark-surface bg-brand-400 hover:bg-brand-300 rounded-full transition-all shadow-glow-cyan hover:shadow-glow-cyan-lg hover:scale-105"
            >
              Engage Us
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAIConsultant}
              className="p-2 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30 sm:hidden"
              aria-label="Open AI Consultant"
            >
              <Sparkles size={16} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-t border-slate-800 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.dropdown ? (
                    <div className="py-2">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-3">
                        {item.name}
                      </span>
                      <div className="mt-1 pl-3 flex flex-col gap-1 border-l-2 border-brand-500/30 ml-3">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="py-1.5 px-3 text-sm text-slate-300 hover:text-brand-400 flex items-center justify-between"
                          >
                            <span>{sub.name}</span>
                            {sub.badge && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-base font-medium text-slate-200 hover:text-brand-400 rounded-lg hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenAIConsultant) onOpenAIConsultant();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-300 font-medium text-sm"
                >
                  <Sparkles size={16} className="text-brand-400" />
                  Ask AI Business Consultant
                </button>
                <Link
                  href="/contact"
                  className="w-full text-center py-3 bg-brand-400 text-dark-surface font-bold text-sm uppercase tracking-wider rounded-xl shadow-glow-cyan"
                >
                  Engage Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
