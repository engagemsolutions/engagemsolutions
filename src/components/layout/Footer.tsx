'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060911] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dubai Skyline SVG Graphic */}
        <div className="mb-12 opacity-40 hover:opacity-75 transition-opacity duration-500">
          <Image
            src="/images/dubai-skyline.svg"
            alt="Dubai Skyline"
            width={1200}
            height={200}
            className="w-full h-auto object-contain max-h-36"
          />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info & Connect */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="relative w-44 h-12 inline-block">
              <Image
                src="/images/logo.png"
                alt={siteConfig.company.name}
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.company.description}
            </p>

            <div className="flex flex-col gap-2.5 pt-2">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Engage with us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/50 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/50 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/50 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={siteConfig.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-slate-200 hover:text-brand-400 transition-colors">
                <Phone size={16} className="text-brand-400" />
                <a href={`tel:${siteConfig.company.rawPhone}`} className="text-sm font-semibold tracking-wide">
                  {siteConfig.company.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-400 transition-colors">Services Hub</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-brand-400 transition-colors">Our Work & Portfolio</Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-brand-400 transition-colors">Our Clients</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-brand-400 transition-colors">Marketing Insights</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link href="/services/ai-agents" className="hover:text-brand-400 transition-colors flex items-center gap-1.5">
                  <span>AI Customer Care</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300">AI</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-brand-400 transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-brand-400 transition-colors">E-commerce Solutions</Link>
              </li>
              <li>
                <Link href="/services/brand-management" className="hover:text-brand-400 transition-colors">Brand Management</Link>
              </li>
              <li>
                <Link href="/services/digital-pr" className="hover:text-brand-400 transition-colors">Digital PR & Media</Link>
              </li>
              <li>
                <Link href="/services/ai-designs" className="hover:text-brand-400 transition-colors">AI Design & Video</Link>
              </li>
              <li>
                <Link href="/services/printing-production" className="hover:text-brand-400 transition-colors">Printing & Production</Link>
              </li>
              <li>
                <Link href="/services/consultancy" className="hover:text-brand-400 transition-colors">Jewelry Consultancy</Link>
              </li>
            </ul>
          </div>

          {/* UAE Locations */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Our UAE Hubs
            </h4>
            <div className="flex flex-col gap-3 text-xs text-slate-400">
              {siteConfig.locations.map((loc) => (
                <div key={loc.name} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="font-semibold text-slate-200 block mb-0.5">{loc.name}</span>
                  <span className="text-slate-400 block mb-1">{loc.address}</span>
                  <span className="text-[11px] text-brand-400">{loc.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© All Rights Reserved {currentYear} | {siteConfig.company.name}</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <a href="#top" className="hover:text-brand-400 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
