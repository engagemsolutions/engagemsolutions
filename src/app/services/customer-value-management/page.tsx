import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Customer Value Management, CRM & Loyalty Solutions | Engage Marketing Solutions',
  description: 'Maximize customer lifetime value through CRM architectures, tiered VIP loyalty programs, and predictive retention automation across the GCC.',
};

export default function CVMPage() {
  const service = siteConfig.services.find((s) => s.slug === 'customer-value-management');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
