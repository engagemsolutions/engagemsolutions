import ServiceDetailView from '@/components/services/ServiceDetailView';
import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'AI Design & Videography Services | Engage Marketing Solutions Gulf',
  description: 'AI designs and videography blending cutting-edge artificial intelligence with world-class creative strategy to deliver photorealistic visuals and cinematic video ads.',
};

export default function AIDesignsPage() {
  const service = siteConfig.services.find((s) => s.slug === 'ai-designs');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
