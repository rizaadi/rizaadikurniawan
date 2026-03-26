import React from 'react';

import Footer from './Footer';
import Header from './Header';

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
