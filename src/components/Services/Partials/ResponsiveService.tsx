import React from 'react';

interface IResponsiveService {
  title: string;
  icon: string;
  description: string;
}

const ResponsiveService: React.FC<IResponsiveService> = ({
  title,
  icon,
  description,
}): JSX.Element => {
  return (
    <div className='bg-pylon h-full bg-opacity-25 shadow-lg'>
      <div
        className={`bg-card-${icon}-bg mxxl:p-3 mxsm:h-auto flex h-full min-h-[450px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-center `}
      >
        <img src={`/svg/${icon}.png`} alt={`${icon} icon`} className='w-12' />
        <h1 className='mxsm:text-m py-3 text-xl font-bold'>{title}</h1>
        <div className='max-w-[600px]'>
          <p className='text-center text-[0.95rem]'>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveService;
