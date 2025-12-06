'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import Footer from './Footer';

const Header = dynamic(() => import('./Header'), {
  ssr: false,
});
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id='main-content'>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
