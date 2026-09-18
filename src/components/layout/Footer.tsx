import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import Illustration from '@/components/ui/Illustration';
export default function Footer() {
  return <footer className="editorial-footer"><div className="editorial-container"><div className="footer-grid">
    <div className="footer-brand"><Link href="/"><Image src="/images/logo.png" alt="Engage — Connecting Brands" width={165} height={55}/></Link><p>{siteConfig.company.description}</p><div className="section-kicker">Engage with us</div><a className="footer-phone" href={`tel:+${siteConfig.company.rawPhone}`}><Illustration kind="phone"/>{siteConfig.company.phone}</a><a href={`mailto:${siteConfig.company.email}`}>{siteConfig.company.email}</a></div>
    <div><h3>Navigation</h3><ul>{siteConfig.navigation.map(item => <li key={item.href}><Link href={item.href}>{item.name}</Link></li>)}<li><Link href="/clients">Our Clients</Link></li></ul></div>
    <div><h3>Core Services</h3><ul>{siteConfig.services.map(service => <li key={service.id}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>)}</ul></div>
    <div><h3>Our UAE Hubs</h3><div className="footer-hubs">{siteConfig.locations.map(location => <div key={location.name}><Illustration kind="pin"/><p><strong>{location.name}</strong><span>{location.address}</span><small>{location.hours}</small></p></div>)}</div></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Engage Marketing Solutions. All rights reserved.</span><span>Strategy. Creativity. Connection.</span><a href="#" aria-label="Back to top">Back to top ↑</a></div></div></footer>;
}
