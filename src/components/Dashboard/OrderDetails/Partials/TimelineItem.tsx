import React from 'react';

interface ITimelineItem {
  icon: string;
  timestamp: string;
  label: string;
}

const TimelineItem: React.FC<ITimelineItem> = ({
  icon,
  timestamp,
  label,
}): JSX.Element => {
  const iconPath = `/svg/${icon}.svg`;
  return (
    <li className='mb-10 ml-6'>
      <span className='bg-pylon absolute -left-[1rem] flex h-8 w-8 items-center justify-center rounded-full'>
        <img src={iconPath} alt={icon} className='h-4 w-4' />
      </span>
      <h3 className='mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
        {label}
      </h3>
      <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        {timestamp}
      </time>
    </li>
  );
};
export default TimelineItem;
