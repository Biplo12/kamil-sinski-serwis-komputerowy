import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import React from 'react';

import OrderStatusRoadmap from '@/components/OrderStatusDetails/Partials/OrderStatusRoadmap';

import { IOrder } from '@/interfaces/IOrderSlice';

interface IOrderInfo {
  order: IOrder;
}

const OrderInfo: React.FC<IOrderInfo> = ({ order }): JSX.Element => {
  return (
    <>
      <div className='flex h-[60vh] w-full flex-col items-start justify-start gap-3'>
        <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-100'>
          {order?.ordertitle}
        </h1>
        <div className='flex min-w-[115px] items-center justify-start gap-3 rounded-lg bg-gray-800 px-2 py-1'>
          <AttachMoneyRoundedIcon className='bg-pylon h-12 w-12 rounded-full text-white' />
          <span className='text-xl font-semibold '>{order?.price} zł</span>
        </div>
        <div className='flex h-[500px] w-[800px] items-center justify-start gap-3 rounded-lg bg-gray-800 px-2 py-1'></div>
        <OrderStatusRoadmap order={order} />
      </div>
    </>
  );
};
export default OrderInfo;
