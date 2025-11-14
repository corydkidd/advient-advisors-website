import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

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
    'I help pharmaceutical, maritime, and industrial companies implement AI strategies that generate measurable ROI. MIT PhD with 25+ years building AI products.',
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
      'Enterprise AI consultant helping pharma, maritime, and industrial companies implement working systems.',
    url: 'https://www.advientadvisors.com',
    siteName: 'Advient Advisors',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Cory Kidd - Enterprise AI Strategy & Implementation',
    description:
      'Enterprise AI consultant with 25+ years building AI products for regulated industries.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
