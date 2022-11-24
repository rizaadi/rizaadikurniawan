import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import '../styles/mdx.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
