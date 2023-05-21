import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { PostHogProvider } from 'posthog-js/react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import '@/styles/globals.css';
import '@/styles/animations.css';

import usePosthog from '@/hooks/useInitPosthog';
import useTrackPageViews from '@/hooks/useTrackPageViews';

import { store } from '@/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const posthog = usePosthog();
  posthog.capture('$pageview');
  useTrackPageViews(posthog);

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PostHogProvider
            apiKey={process.env.NEXT_PUBLIC_POSTHOG_KEY as string}
            options={{ api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST }}
          >
            <Component {...pageProps} />
            <Toaster />
            {/* <Analytics /> */}
          </PostHogProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
