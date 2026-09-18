'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat with Engage Marketing Solutions on WhatsApp"
    >
      <MessageCircle size={28} className="transition-transform group-hover:rotate-12" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-dark-card border border-slate-700 text-xs font-medium text-slate-200 shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with EngageM on WhatsApp
      </span>
    </a>
  );
}
