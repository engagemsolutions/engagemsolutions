import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'E-commerce Solutions | Shopify Plus & Luxury Store Development Dubai',
  description: 'Scalable e-commerce flagships and headless stores tailored for luxury jewelry, fashion, and retail brands in the UAE and GCC with Tabby, Tamara & Apple Pay integrations.',
};

export default function EcommercePage() {
  const service = siteConfig.services.find((s) => s.slug === 'ecommerce');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
