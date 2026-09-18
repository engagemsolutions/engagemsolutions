import { siteConfig } from '@/config/siteConfig';
export default function BrandMarquee() {
  return <section className="media-strip" aria-label="Media recognition"><div className="editorial-container"><p className="eyebrow">Featured &amp; recognized across leading Middle East media</p><div className="media-names">{siteConfig.mediaLogos.map(brand => <span key={brand.name}>{brand.name}</span>)}</div></div></section>;
}
