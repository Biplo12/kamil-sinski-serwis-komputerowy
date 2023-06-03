import React, { useState } from 'react';

import useSaveOrder from '@/hooks/Orders/useSaveOrder';

import Loading from '@/components/Common/Loading';
import TopBar from '@/components/Dashboard/Layout/TopBar';
import OrderInfo from '@/components/Dashboard/OrderDetails/Partials/OrderInfo';
import OrderNotFound from '@/components/Dashboard/OrderDetails/Partials/OrderNotFound';

interface IOrderDetailsMain {
  sidebarState: boolean;
  orderId: number;
}

const OrderDetailsMain: React.FC<IOrderDetailsMain> = ({
  sidebarState,
  orderId,
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  const { isInitialLoading, isError, isOrderNotFound } = useSaveOrder(orderId);

  return (
    <div
      className={`${
        sidebarState ? 'ml-[17rem]' : 'ml-8'
      } mxslg:ml-16 min-h-[calc(100vh - 5.3rem)] mt-[5.3rem] h-auto px-4 duration-300 ease-in-out`}
    >
      <TopBar />
      <h1 className='mt-5 text-3xl font-semibold'>
        Order - <span className='text-pylon'>{orderId}</span>
      </h1>
      <div className='border-pylon mxsm:w-0 mb-5 w-[215px] border-t' />
      {(isInitialLoading || loading) && !isOrderNotFound && (
        <div className='flex h-[60vh] w-full items-center justify-center'>
          <Loading />
        </div>
      )}
      {!isInitialLoading && !isError && (
        <OrderInfo setLoading={setLoading} loading={loading} />
      )}
      {isOrderNotFound && <OrderNotFound />}
      {isError && !isOrderNotFound && (
        <div className='flex h-[70vh] w-full items-center justify-center'>
          <span className='text-2xl font-semibold text-red-500'>
            Something went wrong...
          </span>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsMain;
