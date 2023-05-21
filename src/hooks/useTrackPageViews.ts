import { useRouter } from 'next/router';
import { PostHog } from 'posthog-js';
import { useEffect } from 'react';

const useTrackPageViews = (posthog: PostHog | null): void => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [posthog, router.events]);
};

export default useTrackPageViews;
