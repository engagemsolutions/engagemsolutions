'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SiteBackground from './SiteBackground';
import CookieConsent from './CookieConsent';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollToTop from '@/components/ui/ScrollToTop';
import AIConsultantModal from '@/components/ai/AIConsultantModal';
import SmoothScroll from '@/components/motion/SmoothScroll';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isAIConsultantOpen, setIsAIConsultantOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="site-shell min-h-screen flex flex-col text-[#F4F0E8]">
        <SiteBackground />
        <Navbar onOpenAIConsultant={() => setIsAIConsultantOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <WhatsAppButton />
        <ScrollToTop />
        <AIConsultantModal
          isOpen={isAIConsultantOpen}
          onClose={() => setIsAIConsultantOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
