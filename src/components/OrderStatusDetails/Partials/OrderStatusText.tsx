import React from 'react';

import OrderStatusRoadmap from '@/components/OrderStatusDetails/Partials/OrderStatusRoadmap';

interface IOrderDetails {
  id: string;
  email: string;
  status: string;
  message: string;
  statusMessage: string;
  createdAt: string;
  updatedAt: string;
}

interface IOrderStatusText {
  headerText: JSX.Element;
  text: string;
  order: IOrderDetails | null;
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
      <OrderStatusRoadmap order={order} />
    </div>
  );
};
export default OrderStatusText;