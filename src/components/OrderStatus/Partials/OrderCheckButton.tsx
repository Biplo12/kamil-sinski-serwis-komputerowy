import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import useFetchOrderById from '@/hooks/tanstack/Orders/useFetchOrderById';

import FormButton from '@/components/Common/FormButton';
import Spinner from '@/components/Common/Spinner';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { CustomError } from '@/interfaces';
import { selectOrder, setOrder } from '@/state/orderSlice';

interface IOrderCheckButton {
  orderInput: number | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOrderInput: React.Dispatch<React.SetStateAction<number | null>>;
}

const OrderCheckButton: React.FC<IOrderCheckButton> = ({
  orderInput,
  setLoading,
  setOrderInput,
}): JSX.Element => {
  const { refetch, isInitialLoading } = useFetchOrderById(orderInput, false);
  const dispatch = useAppDispatch();
  const order = useAppSelector(selectOrder);

  const handleResetToInitialState = () => {
    setOrderInput(null);
    order.orderDetails ? dispatch(setOrder(null)) : null;
  };

  useEffect(() => {
    setLoading(isInitialLoading);
  }, [isInitialLoading, setLoading]);

  const checkOrder = async () => {
    const { error, data, isError } = await refetch();
    const err = error as CustomError;
    const order = data?.result;
    if (!isError) {
      toast.success('Zamówienie znalezione');
      dispatch(
        setOrder({
          createdAt: order?.createdAt,
          repairingAt: order?.repairingAt,
          repairedAt: order?.repairedAt,
          status: order?.status,
        })
      );
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
        text={isInitialLoading ? <Spinner /> : 'Sprawdź status'}
        handler={checkOrder}
        disabled={orderInput?.toString()?.length !== 6 || isInitialLoading}
      />
    </>
  );
};
export default OrderCheckButton;
