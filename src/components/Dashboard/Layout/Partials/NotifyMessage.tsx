import React from 'react';

import { useToggleHook } from '@/hooks';
const NotifyMessage: React.FC = (): JSX.Element => {
  const { toggle, state } = useToggleHook(true);
  return (
    <>
      <div
        id='dropdown-cta'
        className={`bg-black-stalion border-pylon rounded-lg border p-4 transition-opacity duration-500 ease-linear ${
          state ? 'opacity-100' : 'opacity-0'
        }`}
        role='alert'
      >
        <div className='mb-3 flex items-center'>
          <span className='bg-pylon mr-2 rounded px-2.5 py-0.5 text-sm font-semibold'>
            New
          </span>
          <button
            type='button'
            className='from-pylon to-sea exsm:w-full exsm:justify-center exsm:gap-2 relative ml-auto inline-flex items-center rounded-lg bg-gradient-to-r p-1 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
            data-dismiss-target='#dropdown-cta'
            aria-label='Close'
            onClick={toggle}
          >
            <span className='sr-only'>Close</span>
            <svg
              aria-hidden='true'
              className='h-4 w-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <p className='mb-3 text-sm text-blue-400 text-blue-800'>
          Dashbord is now available in beta. We're adding new features.
        </p>
      </div>
    </>
  );
};
export default NotifyMessage;
