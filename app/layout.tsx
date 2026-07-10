import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Cory Kidd - Enterprise AI Strategy & Implementation | Advient Advisors',
  description:
    'We turn AI ambition into advantage for pharmaceutical, maritime, and industrial companies — working systems that run, not slideware. MIT PhD with 25+ years building AI.',
  keywords: [
    'AI consultant',
    'enterprise AI strategy',
    'AI implementation',
    'pharmaceutical AI',
    'maritime AI',
    'healthcare technology',
    'MIT AI expert',
  ],
  authors: [{ name: 'Dr. Cory Kidd' }],
  openGraph: {
    title: 'Dr. Cory Kidd - Enterprise AI Strategy & Implementation',
    description:
      'AI advisor and operator helping pharma, maritime, and industrial companies turn ambition into working systems that run.',
    url: 'https://www.advientadvisors.com',
    siteName: 'Advient Advisors',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Dr. Cory Kidd - Enterprise AI Strategy & Implementation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Cory Kidd - Enterprise AI Strategy & Implementation',
    description:
      'Turning AI ambition into advantage — 25+ years building and shipping AI systems for regulated industries.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
