import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import '../styles/globals.css';
import '../styles/mdx.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
