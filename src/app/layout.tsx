import { Analytics } from '@vercel/analytics/react';
import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import '@/styles/globals.css';
import { baseUrl } from '@/types/env';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Riza Adi Kurniawan - Mobile Developer',
    template: '%s | Riza Adi Kurniawan',
  },
  description: 'Personal website of Riza Adi Kurniawan',
  metadataBase: new URL(baseUrl),
  authors: [
    {
      name: 'Riza Adi Kurniawan',
      url: baseUrl,
    },
  ],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'Riza Adi Kurniawan',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/image/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/image/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className='bg-white dark:bg-dark' suppressHydrationWarning>
        <LazyMotion features={domAnimation} strict>
          <MotionConfig reducedMotion='user'>
            <ThemeProvider
              attribute='class'
              defaultTheme='dark'
              enableSystem={false}
            >
              {children}
              <Analytics />
            </ThemeProvider>
          </MotionConfig>
        </LazyMotion>
      </body>
    </html>
  );
}
