/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Video from '@/components/Hero/Partials/Video';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div
      className='bg-black-stalion flex h-[100vh] w-full flex-col items-center justify-center'
      id='strona-glowna'
    >
      <Video />
      <img
        src='/images/big-logo.png'
        alt='big-logo'
        className='absolute z-10 w-[90%] max-w-[1000px]'
      />
    </div>
  );
};
export default Hero;
