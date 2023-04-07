import { useEffect } from 'react';

export const useToggleOnResize = (
  width: number,
  state: boolean,
  toggleState: () => void
) => {
  useEffect(() => {
    const handleCloseMenu = () => {
      if (window.innerWidth > width && state === true) {
        toggleState();
      }
    };

    window.addEventListener('resize', handleCloseMenu, true);
    return () => window.removeEventListener('resize', handleCloseMenu);
  }, [state, toggleState, width]);
};
