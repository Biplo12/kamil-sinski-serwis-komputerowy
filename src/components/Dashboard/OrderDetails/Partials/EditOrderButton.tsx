import React, { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

import logger from '@/lib/logger';
import useEditOrder from '@/hooks/tanstack/Orders/useEditOrder';
import useFetchOrderById from '@/hooks/tanstack/Orders/useFetchOrderById';
import useFetchOrders from '@/hooks/tanstack/Orders/useFetchOrders';

import Spinner from '@/components/Common/Spinner';

import { useAppDispatch } from '@/store/store-hooks';

import { IInputValues } from '@/interfaces';
import { IOrder } from '@/interfaces/IOrderSlice';
import { setOrder, setOrders } from '@/state/orderSlice';

interface IEditOrderButton {
  inputValues: IInputValues;
  orderId: number | null | undefined;
  orderDetails: IOrder | null;
}

const EditOrderButton: React.FC<IEditOrderButton> = ({
  inputValues,
  orderId,
  orderDetails,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const { refetch, isLoading } = useEditOrder(
    inputValues?.ordertitle,
    inputValues?.orderdescription,
    inputValues?.price,
    orderId
  );
  const { refetch: ordersRefetch } = useFetchOrders(false);
  const { refetch: orderRefetch } = useFetchOrderById(orderId, false);

  const changedValues = useMemo(() => {
    return {
      ordertitle: inputValues?.ordertitle !== orderDetails?.ordertitle,
      orderdescription:
        inputValues?.orderdescription !== orderDetails?.orderdescription,
      price: inputValues?.price !== orderDetails?.price,
    };
  }, [
    inputValues?.ordertitle,
    inputValues?.orderdescription,
    inputValues?.price,
    orderDetails?.ordertitle,
    orderDetails?.orderdescription,
    orderDetails?.price,
  ]);

  useEffect(() => {
    if (
      !changedValues.ordertitle &&
      !changedValues.orderdescription &&
      !changedValues.price
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [changedValues]);

  const handleEditOrder = async () => {
    try {
      setLoading(true);
      const { isError } = await refetch();
      const { data } = await ordersRefetch();
      const { data: orderData } = await orderRefetch();
      dispatch(setOrder(orderData?.result));
      dispatch(setOrders(data?.result));
      setLoading(false);
      if (!isError) {
        toast.success('Order edited');
        return;
      }
    } catch (err) {
      const typedError = err as Error;
      logger(typedError);
      toast.error('Something went wrong');
      setLoading(false);
    }
  };

  return (
    <button
      className='bg-sea focus:shadow-outline mt-6 flex items-center justify-center rounded-lg px-10
      py-2 text-center font-bold
      text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      onClick={() => handleEditOrder()}
      disabled={disabled}
    >
      {isLoading || loading ? <Spinner /> : 'Edit order'}
    </button>
  );
};
export default EditOrderButton;
