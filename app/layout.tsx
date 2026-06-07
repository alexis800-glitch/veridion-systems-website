import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Veridion Systems Ltd | AI · Automation · Business Intelligence',
  description:
    'Veridion Systems Ltd designs booking platforms, operational dashboards, AI workflows, and custom business applications for organisations in hospitality, travel, events, SMEs, and corporate teams.',
  keywords: [
    'AI automation',
    'business intelligence',
    'Power BI dashboards',
    'hotel technology',
    'travel technology',
    'workflow automation',
    'custom business applications',
  ],
  authors: [{ name: 'Veridion Systems Ltd' }],
  openGraph: {
    title: 'Veridion Systems Ltd | AI · Automation · Business Intelligence',
    description:
      'We design booking platforms, operational dashboards, AI workflows, and custom business applications that help organisations automate work and make smarter decisions.',
    type: 'website',
    siteName: 'Veridion Systems Ltd',
  },
  icons: {
    icon: '/assets/logos/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
