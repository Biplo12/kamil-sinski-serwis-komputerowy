import React from 'react';

import Spinner from '@/components/Common/Spinner';

interface IOrderInfoItem {
  icon: JSX.Element;
  value: string | number | null | undefined;
}

const OrderInfoItem: React.FC<IOrderInfoItem> = ({
  icon,
  value,
}): JSX.Element => {
  return (
    <div className='flex items-center justify-start gap-3 rounded-lg'>
      <span className='bg-pylon flex h-7 w-7 items-center justify-center rounded-full'>
        {icon}
      </span>
      <span className='break-all text-lg'>
        {value === null || value === undefined ? <Spinner /> : value}
      </span>
    </div>
  );
};
export default OrderInfoItem;
