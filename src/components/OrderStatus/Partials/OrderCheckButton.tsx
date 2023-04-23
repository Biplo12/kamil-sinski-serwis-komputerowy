import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import useFetchOrderById from '@/hooks/tanstack/useFetchOrderById';

import FormButton from '@/components/Common/FormButton';
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
  const handleResetToInitialState = () => {
    setOrderData(null);
    setOrderInput('');
  };
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
      handleResetToInitialState();
      return;
    }
    toast.error('Wystąpił błąd podczas sprawdzania zamówienia');
    handleResetToInitialState();
  };

  return (
    <>
      <FormButton
        text={isLoading ? <Spinner /> : 'Sprawdź status'}
        handler={checkOrder}
        isDisabled={orderInput.length !== 25 || isLoading}
      />
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
