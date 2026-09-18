import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/layout/AppShell';
import { siteConfig } from '@/config/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const serif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.engagemsolutions.com'),
  title: {
    default: `${siteConfig.company.brandWord} ${siteConfig.company.slogan} | Engage Marketing Solutions`,
    template: `%s | Engage Marketing Solutions`,
  },
  description: siteConfig.company.description,
  keywords: [
    'Engage Marketing Solutions',
    'AI Customer Care Agents Dubai',
    'Digital Marketing Agency Dubai',
    'E-commerce Solutions UAE',
    'Jewelry Marketing Consultancy',
    'Printing and Production Dubai',
    'Digital PR UAE',
    'Brand Management Gulf',
  ],
  authors: [{ name: siteConfig.company.name }],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.engagemsolutions.com',
    siteName: siteConfig.company.name,
    title: `${siteConfig.company.name} | ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: siteConfig.company.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} dark scroll-smooth`}>
      <body className="antialiased font-sans bg-[#1A1A1A] text-slate-100 selection:bg-brand-500 selection:text-dark-surface">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
