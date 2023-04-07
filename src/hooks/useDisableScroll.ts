import { useEffect } from 'react';

export const useDisableScroll = (state: boolean): void => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [state]);
};
