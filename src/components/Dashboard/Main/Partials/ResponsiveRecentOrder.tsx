import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import React from 'react';
interface IResponsiveRecentOrder {
  id: string;
  name: string;
  date: string;
}

const ResponsiveRecentOrder: React.FC<IResponsiveRecentOrder> = ({
  id,
  name,
  date,
}): JSX.Element => {
  return (
    <div className='shadow-xs mxslg:inline-flex mxxsm:flex-col flex w-full cursor-pointer items-center justify-between gap-3 border-b border-gray-900 bg-gray-800 p-4 text-center hover:bg-gray-900'>
      <div className='flex flex-col gap-3'>
        <div className='text-pylon text-m font-medium'>{id}</div>
        <div className='text-sm font-medium text-gray-300'>{name}</div>
      </div>
      <div className='flex items-center justify-center gap-1 text-sm font-medium text-gray-500'>
        <DateRangeRoundedIcon />
        {date}
      </div>
      <button
        className='bg-sea focus:shadow-outline flex min-w-[75px] items-center justify-center rounded-lg px-2
      py-1 text-center text-sm font-bold
      text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      >
        Details
      </button>
    </div>
  );
};
export default ResponsiveRecentOrder;
