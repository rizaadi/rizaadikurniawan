import { Analytics } from '@vercel/analytics/react';
import { domAnimation, LazyMotion } from 'framer-motion';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Riza Adi Kurniawan - Mobile Developer',
  description: 'Personal website of Riza Adi Kurniawan',
  metadataBase: new URL('https://rizaadikurniawan.com'),
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
      <head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </head>
      <body className='bg-white dark:bg-dark' suppressHydrationWarning>
        <LazyMotion features={domAnimation} strict>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
          >
            {children}
            <Analytics />
          </ThemeProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
