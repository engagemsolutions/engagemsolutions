import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { siteConfig, ServiceItem } from '@/config/siteConfig';
import Illustration from '@/components/ui/Illustration';
const brandDisciplines = [
  ['Strategic Positioning', 'Research, market context, and a clear point of difference. A meaningful foundation for everything that follows.', 'compass'],
  ['Visual Identity', 'Distinctive logos, considered colour palettes, and typography that make your brand unmistakably yours.', 'identity'],
  ['Brand Voice', 'A consistent language for your story. From the first introduction to the conversations that build trust.', 'voice'],
  ['Corporate Design', 'Beautifully connected touchpoints, from stationery and presentations to your everyday communications.', 'network'],
  ['Brand Governance', 'Practical guidelines and asset libraries that keep every expression of your brand aligned.', 'chart'],
  ['Executive Branding', 'An authentic personal presence for founders and leaders, built around their expertise and ambition.', 'document'],
];
export default function ServiceDetailView({ service }: { service: ServiceItem }) {
  const isBrand = service.id === 'brand-management';
  const disciplines = isBrand ? brandDisciplines : service.features.map((feature, i) => [feature, '', ['compass', 'identity', 'voice', 'network', 'chart', 'document'][i % 6]]);
  const others = siteConfig.services.filter(s => s.id !== service.id).slice(0, 3);
  return <div className="service-page" id="top">
    <section className="service-hero editorial-container">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.title}</span></div>
      <div className="service-hero-grid">
        <div><p className="eyebrow"><span className="small-star">✳</span> Specialized agency practice <span className="edition">ENGAGE / {String(siteConfig.services.indexOf(service) + 1).padStart(2, '0')}</span></p>
          <h1>{isBrand ? <>Bespoke Brand<br/><em>Management.</em></> : service.title}</h1>
          <p className="service-tagline">{isBrand ? 'Forging Authenticity and Enduring Equity' : service.tagline}</p>
          <p className="service-intro">{isBrand ? 'More than a visual identity. A distinctive presence, a clear purpose, and a brand your audience believes in.' : service.fullDescription}</p>
          <div className="editorial-actions"><Link className="button-primary" href="/contact">{isBrand ? 'Inquire for Brand Deep-Dive' : 'Discuss your project'}<ArrowUpRight size={17}/></Link><Link className="button-outline" href="/work">Case Study Portfolio <ArrowUpRight size={17}/></Link></div>
        </div>
        <aside className="metric-column"><p className="eyebrow">✧ &nbsp; Performance metrics</p>{(service.stats || siteConfig.company.stats.slice(0, 2)).map((stat, i) => <div className="editorial-metric" key={stat.label}><span className="metric-index">0{i + 1} /</span><strong>{stat.value}</strong><p>{stat.label}</p>{isBrand && i === 0 && <small>(Curated Project Average)</small>}</div>)}<p className="metric-footnote">Rooted in Dubai. Built for lasting impact.</p></aside>
      </div>
    </section>
    <section className="discipline-section"><div className="editorial-container">
      <div className="discipline-layout"><div><div className="section-kicker">01 / The craft</div><h2>Core Disciplines</h2><div className="discipline-grid">{disciplines.map(([title, description, icon], i) => <article className="discipline" key={title}><div className="discipline-icon"><Illustration kind={icon}/><span>0{i + 1}</span></div><h3>{title}</h3>{description && <p>{description}</p>}</article>)}</div></div>
        <aside className="deliverables"><div className="section-kicker">02 / The outcome</div><h2>What We Deliver</h2><ul>{service.deliverables.map(del => <li key={del}><span className="delivery-check"><Check size={12}/></span>{del}</li>)}</ul><div className="brand-art" aria-hidden="true"><span className="art-orbit orbit-one"/><span className="art-orbit orbit-two"/><span className="art-orbit orbit-three"/><span className="art-caption">Distinct by design.<br/><i>Enduring by nature.</i></span><span className="art-mark">e.</span></div></aside>
      </div>
      <div className="related-heading"><div><div className="section-kicker">03 / Better together</div><h2>Complementary Services</h2></div><Link href="/services">Explore all services <ArrowUpRight size={16}/></Link></div>
      <div className="complementary-grid">{others.map((other, i) => <Link className="complementary-card" href={`/services/${other.slug}`} key={other.id}><div className="complementary-art"><span>0{i + 1} /</span><Illustration kind={other.iconName}/><ArrowUpRight size={20}/></div><div className="complementary-copy"><h3>{other.id === 'ai-agents' ? 'AI Agents' : other.title}</h3><p>{other.shortDescription}</p><span className="text-link">Discover the practice <ArrowUpRight size={15}/></span></div></Link>)}</div>
    </div></section>
  </div>;
}
