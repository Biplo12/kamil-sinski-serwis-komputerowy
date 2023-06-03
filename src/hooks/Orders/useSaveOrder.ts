import { useEffect } from 'react';

import useFetchOrderById from '@/hooks/tanstack/Orders/useFetchOrderById';

import { useAppDispatch } from '@/store/store-hooks';

import { IAxiosError } from '@/interfaces/IError';
import { setOrder } from '@/state/orderSlice';

const useSaveOrder = (orderId: number) => {
  const dispatch = useAppDispatch();
  const { data, isInitialLoading, error, isError } = useFetchOrderById(
    orderId,
    true
  );
  const axiosError = (error as IAxiosError)?.response?.data?.message;
  const isOrderNotFound = axiosError === 'Order not found';

  useEffect(() => {
    if (!data?.result) return;
    dispatch(setOrder(data?.result));
  }, [data?.result, dispatch]);

  return {
    isInitialLoading,
    error,
    isError,
    isOrderNotFound,
  };
};

export default useSaveOrder;
