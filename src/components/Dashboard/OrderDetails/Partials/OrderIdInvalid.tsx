import React from 'react';

import TopBar from '@/components/Dashboard/Layout/TopBar';

interface IOrderIdInvalid {
  sidebarState: boolean;
}

const OrderIdInvalid: React.FC<IOrderIdInvalid> = ({
  sidebarState,
}): JSX.Element => {
  return (
    <div
      className={`${
        sidebarState ? 'ml-[17rem]' : 'ml-8'
      } mxslg:ml-16 min-h-[calc(100vh - 5.3rem)] mt-[5.3rem] h-auto px-4 duration-300 ease-in-out`}
    >
      <TopBar />
      <div className='flex h-[80vh] w-full items-center justify-center'>
        <span className='text-2xl font-semibold text-red-500'>
          Invalid order id...
        </span>
      </div>
    </div>
  );
};
export default OrderIdInvalid;
