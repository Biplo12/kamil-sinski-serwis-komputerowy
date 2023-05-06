import React from 'react';

import TopBar from '@/components/Dashboard/Layout/TopBar';
import OrdersTable from '@/components/Dashboard/ManageOrders/Partials/OrdersTable';

interface IManageOrders {
  sidebarState: boolean;
}

const ManageOrders: React.FC<IManageOrders> = ({
  sidebarState,
}): JSX.Element => {
  return (
    <div
      className={`${
        sidebarState ? 'ml-[17rem]' : 'ml-8'
      } mxslg:ml-16 min-h-[calc(100vh - 5.3rem)] mt-[5.3rem] h-auto px-4 duration-300 ease-in-out`}
    >
      <TopBar />
      <h1 className='my-5 text-3xl font-semibold'>Manage Orders</h1>
      <OrdersTable />
    </div>
  );
};
export default ManageOrders;
