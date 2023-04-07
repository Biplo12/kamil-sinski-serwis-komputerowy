import { useState } from 'react';

interface IToggleReturn {
  state: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}

export const useToggleHook = (initialState: boolean): IToggleReturn => {
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
