import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';
import '@/styles/animations.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
      <Analytics />
    </>
  );
}

export default MyApp;
