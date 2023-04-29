import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import React from 'react';

interface IRoundedProgressBar {
  percent: number;
}

const RoundedProgressBar: React.FC<IRoundedProgressBar> = ({
  percent,
}): JSX.Element => {
  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (percent / 100) * circumference;
  const fixedPercent = percent.toFixed(1);
  return (
    <div className='flex flex-col items-center justify-center rounded-full'>
      <svg className='h-20 w-20'>
        <circle
          className='text-gray-300'
          strokeWidth='3'
          stroke='white'
          fill='transparent'
          r='30'
          cx='40'
          cy='40'
        />
        <circle
          className='text-pylon'
          strokeWidth='3'
          strokeLinecap='round'
          stroke={percent > 0 ? '#01A3FF' : 'red'}
          fill='transparent'
          r='30'
          cx='40'
          cy='40'
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className='flex'>
        {Number(fixedPercent) > 0 ? (
          <div className='text-pylon flex items-center justify-center gap-1'>
            <TrendingUpRoundedIcon />
            <span className='text-sm'>+{fixedPercent}%</span>
          </div>
        ) : (
          <div className='flex items-center justify-center gap-1 text-red-500'>
            <TrendingDownRoundedIcon />
            <span className='text-sm'>{fixedPercent}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoundedProgressBar;
