import React, { Fragment } from 'react';

import RecentOrder from '@/components/Dashboard/Main/Partials/RecentOrder';
import ResponsiveRecentOrder from '@/components/Dashboard/Main/Partials/ResponsiveRecentOrder';

import { useAppSelector } from '@/store/store-hooks';

import { selectOrder } from '@/state/orderSlice';

const RecentOrders: React.FC = (): JSX.Element => {
  const orders = useAppSelector(selectOrder);
  return (
    <>
      <h1 className='border-b border-gray-900 px-4 py-5 text-xl font-bold text-white'>
        Recent Orders
      </h1>
      <div className='flex w-full flex-col'>
        {orders.orders?.length === 0 && (
          <div className='mt-10 flex w-full flex-col items-center justify-center px-5 text-center'>
            <h1 className='text-2xl font-semibold text-gray-800 dark:text-gray-100'>
              No orders yet
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>
              You haven't created any orders yet
            </p>
          </div>
        )}
        {orders.orders?.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className='mxslg:hidden block'>
                <RecentOrder
                  name={item.userFullName}
                  date={item.createdAt}
                  id={item.orderId.toString()}
                />
              </div>
              <div className='mxslg:block hidden'>
                <ResponsiveRecentOrder
                  name={item.userFullName}
                  date={item.createdAt}
                  id={item.orderId.toString()}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
export default RecentOrders;
