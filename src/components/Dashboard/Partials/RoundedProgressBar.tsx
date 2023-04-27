import React from 'react';

interface IRoundedProgressBar {
  percent: number;
}

const RoundedProgressBar: React.FC<IRoundedProgressBar> = ({
  percent,
}): JSX.Element => {
  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className='flex items-center justify-center rounded-full'>
      <svg className='h-20 w-20'>
        <circle
          className='text-gray-300'
          strokeWidth='4'
          stroke='white'
          fill='transparent'
          r='30'
          cx='40'
          cy='40'
        />
        <circle
          className='text-pylon'
          strokeWidth='4'
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
      <span
        className={`absolute text-sm ${
          percent > 0
            ? 'text-pylon'
            : percent === 0
            ? 'text-gray-500'
            : 'text-red-500'
        }`}
      >
        {percent > 0 ? `+${percent}%` : `${percent}%`}
      </span>
    </div>
  );
};

export default RoundedProgressBar;
