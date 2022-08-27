import dynamic from 'next/dynamic';

import Footer from './Footer';

const Header = dynamic(() => import('./Header'), {
  ssr: false,
});
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
