'use client';

import { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import BrandMarquee from '@/components/home/BrandMarquee';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import AIConsultantPreview from '@/components/home/AIConsultantPreview';
import AboutTeaser from '@/components/home/AboutTeaser';
import PortfolioTeaser from '@/components/home/PortfolioTeaser';
import ConsultBanner from '@/components/home/ConsultBanner';
import ContactSection from '@/components/home/ContactSection';
import AIConsultantModal from '@/components/ai/AIConsultantModal';

export default function HomePage() {
  const [isAIConsultantOpen, setIsAIConsultantOpen] = useState(false);

  return (
    <div className="relative">
      <HeroSection onOpenAIConsultant={() => setIsAIConsultantOpen(true)} />
      <BrandMarquee />
      <ServicesShowcase />
      <AIConsultantPreview onOpenAIConsultant={() => setIsAIConsultantOpen(true)} />
      <AboutTeaser />
      <PortfolioTeaser />
      <ConsultBanner />
      <ContactSection />

      <AIConsultantModal
        isOpen={isAIConsultantOpen}
        onClose={() => setIsAIConsultantOpen(false)}
      />
    </div>
  );
}
