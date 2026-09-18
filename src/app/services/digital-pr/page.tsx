import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Digital PR Services in Dubai | Media Authority & Press Placements',
  description: 'Connect your brand with premier regional and global publications including Khaleej Times, Gulf News, Zawya, Logistics Gulf, and MSN.',
};

export default function DigitalPRPage() {
  const service = siteConfig.services.find((s) => s.slug === 'digital-pr');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
