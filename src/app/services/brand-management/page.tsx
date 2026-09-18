import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Brand Management Services in Dubai | Strategic Identity & Positioning',
  description: 'Strengthen your brand with Engage Marketing Solutions. Comprehensive brand positioning, visual identity systems, corporate messaging, and reputation management in the UAE.',
};

export default function BrandManagementPage() {
  const service = siteConfig.services.find((s) => s.slug === 'brand-management');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
