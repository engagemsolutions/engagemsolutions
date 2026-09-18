'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';

export default function BrandMarquee() {
  return (
    <section className="py-14 bg-[#070B14] border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400">
          Featured &amp; Recognized Across Leading Middle East Media
        </h3>
      </div>

      {/* Marquee Track */}
      <div className="flex select-none overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 min-w-full animate-marquee">
          {siteConfig.mediaLogos.map((brand, i) => (
            <div
              key={`b1-${i}`}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer h-14 min-w-[140px]"
            >
              {brand.file ? (
                <div className="relative w-36 h-12">
                  <Image
                    src={brand.file}
                    alt={brand.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-base sm:text-lg font-black tracking-wider text-slate-300 hover:text-brand-400 font-sans">
                  {brand.text}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Duplicate Track for seamless infinite loop */}
        <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 min-w-full animate-marquee" aria-hidden="true">
          {siteConfig.mediaLogos.map((brand, i) => (
            <div
              key={`b2-${i}`}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer h-14 min-w-[140px]"
            >
              {brand.file ? (
                <div className="relative w-36 h-12">
                  <Image
                    src={brand.file}
                    alt={brand.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-base sm:text-lg font-black tracking-wider text-slate-300 hover:text-brand-400 font-sans">
                  {brand.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
