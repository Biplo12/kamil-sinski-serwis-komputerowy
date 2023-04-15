import React from 'react';
const Video: React.FC = (): JSX.Element => {
  return (
    <video
      autoPlay
      loop
      muted
      className='bg-black-stalion absolute h-full w-full object-cover brightness-[35%] filter'
    >
      <source src='/videos/hero.mp4' type='video/mp4' />
      <div className='absolute h-full w-full' />
    </video>
  );
};
export default Video;
