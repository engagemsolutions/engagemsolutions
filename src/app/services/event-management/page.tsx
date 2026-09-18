import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Event Management Services | Corporate Galas & Activations Dubai',
  description: 'Full-scale event management across the Gulf. Corporate galas, brand activations, exhibition stand fabrication, and VIP talent management in the UAE.',
};

export default function EventManagementPage() {
  const service = siteConfig.services.find((s) => s.slug === 'event-management');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
