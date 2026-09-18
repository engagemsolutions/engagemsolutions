import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'AI Customer Care & Sales Agents | 24/7 Autonomous Lead Conversion Dubai',
  description: 'Deploy 24/7 autonomous bilingual AI Customer Care & Sales Agents in Dubai. Seamless WhatsApp, Web & CRM integration that drives conversion and cuts operational overhead.',
};

export default function AIAgentsPage() {
  const service = siteConfig.services.find((s) => s.slug === 'ai-agents');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
