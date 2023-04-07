import { useState } from 'react';

export const useToogleHook = (initialState: boolean) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  const close = () => {
    setState(false);
  };

  const open = () => {
    setState(true);
  };

  return { state, toggle, close, open };
};
