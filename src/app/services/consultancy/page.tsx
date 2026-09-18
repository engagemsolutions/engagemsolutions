import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Consultancy Services for Jewelry & Retail Brands | Engage Marketing Solutions',
  description: 'Specialized luxury jewelry consultancy, retail store operations excellence audits, staff high-touch training, and UGC shoots in Dubai and the GCC.',
};

export default function ConsultancyPage() {
  const service = siteConfig.services.find((s) => s.slug === 'consultancy');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
