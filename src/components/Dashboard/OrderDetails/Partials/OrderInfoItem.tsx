import React from 'react';

import Loading from '@/components/Common/Loading';

interface IOrderInfoItem {
  icon: JSX.Element;
  value: string | number | null | undefined;
  loading: boolean;
}

const OrderInfoItem: React.FC<IOrderInfoItem> = ({
  icon,
  value,
  loading,
}): JSX.Element => {
  return (
    <div className='flex items-center justify-start gap-3 rounded-lg'>
      <span className='bg-pylon flex h-8 w-8 items-center justify-center rounded-full'>
        {icon}
      </span>
      <span className='break-all text-lg'>
        {value === undefined ? 'N/A' : loading ? <Loading /> : value}
      </span>
    </div>
  );
};
export default OrderInfoItem;
