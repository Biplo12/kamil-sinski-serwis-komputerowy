import React from 'react';
import toast from 'react-hot-toast';

import logger from '@/lib/logger';
import useCreateOrder from '@/hooks/tanstack/useCreateOrder';

import Spinner from '@/components/Common/Spinner';

import { IInputValues } from '@/interfaces';

interface ICreateOrderButton {
  inputValues: IInputValues;
}

const CreateOrderButton: React.FC<ICreateOrderButton> = ({
  inputValues,
}): JSX.Element => {
  const { refetch, isLoading } = useCreateOrder(
    inputValues?.firstname,
    inputValues?.lastname,
    inputValues?.email,
    inputValues?.phonenumber,
    inputValues?.ordertitle,
    inputValues?.orderdescription,
    inputValues?.price
  );

  const handleCreateOrder = async () => {
    try {
      const { isError } = await refetch();
      if (!isError) {
        toast.success('Order created');
        return;
      }
    } catch (err) {
      logger(err);
      toast.error('Error while creating order');
    }
  };

  return (
    <button
      className='bg-sea focus:shadow-outline mt-6 flex min-w-[200px] items-center justify-center rounded-lg px-3
      py-2 text-center font-bold
      text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      onClick={() => handleCreateOrder()}
    >
      {isLoading ? <Spinner /> : 'Create order'}
    </button>
  );
};
export default CreateOrderButton;
