import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import useFetchOrderById from '@/hooks/tanstack/useFetchOrderById';

import Spinner from '@/components/Common/Spinner';

interface IOrderCheckButton {
  orderInput: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOrderInput: React.Dispatch<React.SetStateAction<string>>;
}

interface IOrder {
  result: {
    id: string;
    email: string;
    status: string;
    message: string;
    statusMessage: string;
    createdAt: string;
    updatedAt: string;
  };
  message: string;
  statusCode: number;
}

interface CustomError extends Error {
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
}

const OrderCheckButton: React.FC<IOrderCheckButton> = ({
  orderInput,
  setLoading,
  setOrderInput,
}): JSX.Element => {
  const [orderData, setOrderData] = useState<IOrder | null>();
  const { isLoading, refetch } = useFetchOrderById(orderInput);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  const checkOrder = async () => {
    const { error, data, isError } = await refetch();
    const err = error as CustomError;
    if (!isError) {
      toast.success('Zamówienie znalezione');
      setOrderData(data);
      return;
    }
    if (err?.response?.status === 404) {
      toast.error('Nie znaleziono zamówienia o podanym numerze');
      setOrderInput('');
      return;
    }
    toast.error('Wystąpił błąd podczas sprawdzania zamówienia');
    setOrderInput('');
    setOrderData(null);
  };

  return (
    <>
      <button
        type='submit'
        className='bg-pylon focus:shadow-outline mt-3 flex min-w-[175px] items-center justify-center rounded-lg px-4
      py-[0.65rem] text-center font-bold text-white
      transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
        disabled={orderInput.length !== 25 || isLoading}
        onClick={() => checkOrder()}
      >
        {isLoading ? <Spinner /> : 'Sprawdź status'}
      </button>
      {orderData ? (
        <div className='mt-3 flex gap-1'>
          <p className='text-lg font-bold'>Status zamówienia:</p>
          <p className='text-lg'>{orderData?.result?.status}</p>
        </div>
      ) : null}
    </>
  );
};
export default OrderCheckButton;
