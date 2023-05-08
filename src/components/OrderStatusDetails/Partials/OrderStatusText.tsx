import React from 'react';

import OrderStatusTimeline from '@/components/OrderStatusDetails/Partials/OrderStatusTimeline';

import { IOrder } from '@/interfaces/IOrderSlice';

interface IOrderStatusText {
  headerText: JSX.Element;
  text: string;
  order: IOrder | null;
}

const OrderStatusText: React.FC<IOrderStatusText> = ({
  headerText,
  text,
  order,
}): JSX.Element => {
  return (
    <div className='flex h-auto min-h-[100vh] flex-col items-center justify-center gap-10 px-5 text-center'>
      {headerText}
      <p className='max-w-[800px]'>{text}</p>
      <OrderStatusTimeline order={order} />
    </div>
  );
};
export default OrderStatusText;
