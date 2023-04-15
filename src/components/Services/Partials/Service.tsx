import React from 'react';

interface IService {
  title: string;
  icon: string;
  description: string;
}

const Service: React.FC<IService> = ({ title, icon, description }): JSX.Element => {
  return (
    <div className='bg-pylon h-full bg-opacity-25 shadow-lg'>
      <div
        className={`bg-card-${icon}-bg mxxl:p-3 flex h-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-5`}
      >
        <img src={`/svg/${icon}.png`} alt={`${icon} icon`} className='w-12' />
        <h1 className='py-3 text-xl font-bold'>{title}</h1>
        <div className='max-w-[600px]'>
          <p className='text-center text-[0.95rem]'>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Service;
