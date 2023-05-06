import React from 'react';

import CreateOrderForm from '@/components/Dashboard/CreateOrder/Partials/CreateOrderForm';
import TopBar from '@/components/Dashboard/Layout/TopBar';

interface ICreateOrder {
  sidebarState: boolean;
}

const CreateOrder: React.FC<ICreateOrder> = ({ sidebarState }): JSX.Element => {
  return (
    <div
      className={`${
        sidebarState ? 'ml-[17rem]' : 'ml-8'
      } mxslg:ml-16 mt-[5.3rem] h-auto min-h-screen px-4 duration-300 ease-in-out`}
    >
      <TopBar />
      <h1 className='my-5 text-3xl font-semibold'>Create Order</h1>
      <CreateOrderForm />
    </div>
  );
};
export default CreateOrder;
