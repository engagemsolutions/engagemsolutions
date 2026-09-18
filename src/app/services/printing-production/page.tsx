import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Printing and Production Services in Dubai & Ajman | Engage Marketing Solutions',
  description: 'In-house physical branding, bespoke corporate uniforms, large-format printing, exhibition kiosks, and rigid packaging manufactured in our UAE facility.',
};

export default function PrintingProductionPage() {
  const service = siteConfig.services.find((s) => s.slug === 'printing-production');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
