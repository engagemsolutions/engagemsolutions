'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import Illustration from '@/components/ui/Illustration';
export default function Navbar({ onOpenAIConsultant }: { onOpenAIConsultant?: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  useEffect(() => { setOpen(false); setDropdown(null); }, [pathname]);
  return <header className="editorial-header" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); setDropdown(null); } }}>
    <div className="header-inner editorial-container">
      <Link href="/" aria-label="Engage home" className="brand-logo"><Image src="/images/logo.png" alt="Engage — Connecting Brands" width={150} height={48} priority/></Link>
      <a className="header-phone" href={`tel:+${siteConfig.company.rawPhone}`} aria-label={`Call ${siteConfig.company.phone}`}><Illustration kind="phone"/><span>Let's talk<br/><strong>{siteConfig.company.phone}</strong></span></a>
      <nav aria-label="Main navigation" className="desktop-navigation">{siteConfig.navigation.map(item => <div className="nav-item" key={item.name} onMouseEnter={() => setDropdown(item.name)} onMouseLeave={() => setDropdown(null)} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setDropdown(null); }}>
        {item.dropdown ? <><button className={pathname.startsWith(item.href) ? 'active' : ''} aria-expanded={dropdown === item.name} onClick={() => setDropdown(dropdown === item.name ? null : item.name)}>{item.name}<ChevronDown size={12}/></button>{dropdown === item.name && <div className="nav-dropdown"><Link href={item.href}>Explore {item.name.toLowerCase()} <ArrowUpRight size={14}/></Link>{item.dropdown.map(sub => <Link key={sub.href} href={sub.href}>{sub.name}<ArrowUpRight size={14}/></Link>)}</div>}</> : <Link aria-current={pathname === item.href ? 'page' : undefined} href={item.href}>{item.name}</Link>}
      </div>)}</nav>
      <div className="header-actions"><button className="button-primary" onClick={onOpenAIConsultant}>AI Consultant <span>✳</span></button><Link href="/contact" className="button-outline">Engage Us <ArrowUpRight size={14}/></Link></div>
      <button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{siteConfig.navigation.map(item => <div key={item.name}><Link href={item.href}>{item.name}</Link>{item.dropdown && <div className="mobile-subnav">{item.dropdown.map(sub => <Link href={sub.href} key={sub.href}>{sub.name}</Link>)}</div>}</div>)}<button className="button-primary" onClick={() => { setOpen(false); onOpenAIConsultant?.(); }}>AI Consultant ✳</button><a href={`tel:+${siteConfig.company.rawPhone}`}>{siteConfig.company.phone}</a></nav>}
  </header>;
}
