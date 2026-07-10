import type { Metadata } from 'next';
import { Gloock, Lora, Instrument_Sans } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MotionProvider from '@/components/MotionProvider';

// Display — Gloock (headlines, hero tagline, stat numerals)
const gloock = Gloock({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

// Body — Lora (paragraphs, positioning, quotes)
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

// Utility — Instrument Sans (eyebrows, labels, nav, buttons, tags)
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-util',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Advient Advisors — Enterprise AI, built not just advised',
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
    title: 'We turn AI ambition into advantage',
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
    title: 'We turn AI ambition into advantage',
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
    <html
      lang="en"
      className={`${gloock.variable} ${lora.variable} ${instrumentSans.variable}`}
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <main id="main">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
