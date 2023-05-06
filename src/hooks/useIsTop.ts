import { useEffect, useState } from 'react';

export const useIsTop = (): boolean => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isTop;
};
