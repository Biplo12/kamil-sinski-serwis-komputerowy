import React from 'react';

interface IOrderInfoItem {
  icon: JSX.Element;
  value: string | number;
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
      <span className='break-all text-lg'>{value}</span>
    </div>
  );
};
export default OrderInfoItem;
