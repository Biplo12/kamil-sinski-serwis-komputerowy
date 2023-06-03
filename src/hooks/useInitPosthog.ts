import posthog from 'posthog-js';
import { useEffect } from 'react';

const usePosthog = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY as string, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      });
      posthog.opt_out_capturing();
    }
  }, []);

  return posthog;
};

export default usePosthog;
