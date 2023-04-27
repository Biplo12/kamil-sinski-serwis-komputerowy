import React from 'react';

import RoundedProgressBar from '@/components/Dashboard/Partials/RoundedProgressBar';

interface ITopStatCard {
  value: string;
  label: string;
  icon: JSX.Element;
}

const TopStatCard: React.FC<ITopStatCard> = ({
  value,
  label,
  icon,
}): JSX.Element => {
  const percent = Math.floor(Math.random() * 100);
  return (
    <div className='flex h-48 items-center justify-around rounded bg-gray-800'>
      <div className='flex flex-col items-start justify-center'>
        {icon}
        <div className='text-2xl font-bold'>{value}</div>
        <div className='text-sm text-gray-500'>{label}</div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <RoundedProgressBar percent={percent} />
      </div>
    </div>
  );
};
export default TopStatCard;
