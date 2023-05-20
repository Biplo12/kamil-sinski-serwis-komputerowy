import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import { useRouter } from 'next/router';
import React from 'react';
interface IRecentOrder {
  id: string;
  name: string;
  date: string;
}

const RecentOrder: React.FC<IRecentOrder> = ({
  id,
  name,
  date,
}): JSX.Element => {
  const router = useRouter();
  const handleDetails = () => {
    router.push(`/admin/dashboard/manage-orders/${id}`);
  };

  return (
    <div className='shadow-xs mxxl:flex-col mxxl:justify-center mxslg:inline-flex flex w-full cursor-pointer items-center justify-between gap-3 border-b border-gray-900 bg-gray-800 p-4 text-center hover:bg-gray-900'>
      <div className='mxxl:items-center flex flex-col items-start'>
        <div className='text-pylon text-m text-left font-medium'>{id}</div>
        <div className='w-[150px] text-left text-sm font-medium text-gray-300'>
          {name}
        </div>
      </div>
      <div className='flex items-center justify-center gap-1 text-sm font-medium text-gray-500'>
        <DateRangeRoundedIcon />
        {date.split('T')[0]}
      </div>
      <button
        className='from-pylon to-sea focus:shadow-outline flex max-h-[30px] min-w-[30px] items-center justify-center rounded-lg bg-gradient-to-r px-3 py-2
      text-center text-sm font-bold
      text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
        onClick={() => handleDetails()}
      >
        Details
      </button>
    </div>
  );
};
export default RecentOrder;
