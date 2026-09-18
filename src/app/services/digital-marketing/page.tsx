import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Digital Marketing Services in Dubai | High-ROAS SEO & Performance Ads',
  description: 'Drive high-velocity growth with Engage Marketing Solutions. SEO, Google Ads, Meta/TikTok performance campaigns, and full-funnel digital marketing in Dubai, UAE.',
};

export default function DigitalMarketingPage() {
  const service = siteConfig.services.find((s) => s.slug === 'digital-marketing');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
