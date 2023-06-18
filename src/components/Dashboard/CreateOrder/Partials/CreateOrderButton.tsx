import React from 'react';

import useCreateOrderCall from '@/hooks/Orders/useCreateOrderCall';

import Loading from '@/components/Common/Loading';
import RedirectButton from '@/components/Dashboard/Common/RedirectButton';

import { IOrderInputValues } from '@/interfaces';

interface ICreateOrderButton {
  inputValues: IOrderInputValues;
}

const CreateOrderButton: React.FC<ICreateOrderButton> = ({
  inputValues,
}): JSX.Element => {
  const { handleCreateOrder, isLoading, isSuccess, orderId } =
    useCreateOrderCall(inputValues);

  return (
    <div className='flex items-end justify-start gap-3'>
      <button
        className='from-pylon to-sea focus:shadow-outline mxsm:w-ful mxsm:min-w-full mt-6 flex min-w-[200px] items-center justify-center rounded-lg bg-gradient-to-r px-3
      py-2 text-center font-bold
      text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
        onClick={handleCreateOrder}
        disabled={isLoading}
      >
        {isLoading ? <Loading /> : 'Create order'}
      </button>
      {isSuccess && (
        <RedirectButton
          label='Go to order'
          path={`/admin/dashboard/manage-orders/${orderId}`}
        />
      )}
    </div>
  );
};
export default CreateOrderButton;
