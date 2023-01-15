import { Analytics } from '@vercel/analytics/react';
import { domAnimation, LazyMotion } from 'framer-motion';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import '../styles/globals.css';
import '../styles/mdx.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </LazyMotion>
  );
}
