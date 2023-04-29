import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import React from 'react';

import RoundedProgressBar from '@/components/Dashboard/Common/RoundedProgressBar';

interface IStatsCard {
  value: number | string;
  label: string;
  icon: JSX.Element;
}

const StatsCard: React.FC<IStatsCard> = ({
  value,
  label,
  icon,
}): JSX.Element => {
  return (
    <div className='flex h-48 w-full items-center justify-around rounded bg-gray-800 p-3'>
      <div className='mxxl:items-center flex flex-col items-start justify-center gap-1'>
        <div className='bg-sea relative inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
          {icon}
        </div>
        <div className='text-2xl font-bold'>{value}</div>
        <div className='text-sm text-gray-500'>{label}</div>
        <div className='mxxl:flex hidden'>
          {Number(value) > 0 ? (
            <div className='text-pylon flex items-center justify-center gap-1'>
              <TrendingUpRoundedIcon />
              <span className='text-sm'>+{value}%</span>
            </div>
          ) : (
            <div className='flex items-center justify-center gap-1 text-red-500'>
              <TrendingDownRoundedIcon />
              <span className='text-sm'>{value}%</span>
            </div>
          )}
        </div>
      </div>
      <div className='mxxl:hidden flex flex-col items-center justify-center'>
        <RoundedProgressBar percent={Number(value) / 33} />
      </div>
    </div>
  );
};
export default StatsCard;
