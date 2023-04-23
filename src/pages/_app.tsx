import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

import '@/styles/globals.css';
import '@/styles/animations.css';

import { store } from '@/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <Toaster />
          <Analytics />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
