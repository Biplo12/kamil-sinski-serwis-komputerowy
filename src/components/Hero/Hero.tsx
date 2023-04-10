import React from 'react';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div className='bg-black-stalion flex h-[100vh] w-full flex-col items-center justify-center '>
      <video
        autoPlay
        loop
        muted
        className='bg-black-stalion absolute h-full w-full object-cover brightness-[35%] filter'
      >
        <source src='/videos/hero.mp4' type='video/mp4' />
        <div className='absolute h-full w-full' />
      </video>
      <img
        src='/images/big-logo.png'
        alt='big-logo'
        className='absolute z-10 w-[90%] max-w-[1000px]'
      />
    </div>
  );
};
export default Hero;
