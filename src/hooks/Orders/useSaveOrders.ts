import { useEffect } from 'react';

import useFetchOrders from '@/hooks/tanstack/Orders/useFetchOrders';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectOrder, setOrders } from '@/state/orderSlice';

const useSaveOrders = (): void => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrder);
  const { refetch } = useFetchOrders(false);

  useEffect(() => {
    const fetchData = async () => {
      if (orders.orders && orders.orders.length > 0) return;
      const { data } = await refetch();
      if (!data) return;
      dispatch(setOrders(data?.result));
    };
    fetchData();
  }, [orders.orders, refetch, dispatch]);
};

export default useSaveOrders;
