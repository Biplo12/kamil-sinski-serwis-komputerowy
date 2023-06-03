import toast from 'react-hot-toast';

import logger from '@/lib/logger';
import useCreateOrder from '@/hooks/tanstack/Orders/useCreateOrder';
import useFetchOrders from '@/hooks/tanstack/Orders/useFetchOrders';
import useFetchStatistics from '@/hooks/tanstack/useFetchStatistics';

import { useAppDispatch } from '@/store/store-hooks';

import validateMail from '@/helpers/validateMail';
import { CustomError, IOrderInputValues } from '@/interfaces';
import { setOrders } from '@/state/orderSlice';
import { setStats } from '@/state/statsSlice';

const CreateOrderCall = (inputValues: IOrderInputValues) => {
  const dispatch = useAppDispatch();
  const { mutateAsync, isLoading, isSuccess, data } = useCreateOrder(
    inputValues?.firstname,
    inputValues?.lastname,
    inputValues?.email,
    inputValues?.phonenumber,
    inputValues?.ordertitle,
    inputValues?.orderdescription,
    inputValues?.price
  );
  const { refetch: ordersRefetch } = useFetchOrders(false);
  const { refetch: statsRefetch } = useFetchStatistics(false);

  const handleCreateOrder = async () => {
    try {
      validateMail(inputValues?.email);
      const { isError, error } = await mutateAsync();
      const err = error as CustomError;
      const { data } = await ordersRefetch();
      const { data: statsData } = await statsRefetch();
      dispatch(setOrders(data?.result));
      dispatch(setStats(statsData?.result));
      if (!isError) {
        toast.success('Order created');
        return;
      } else {
        toast.error(err?.response?.data?.message || 'Something went wrong');
      }
    } catch (err) {
      const typedError = err as Error;
      if (typedError.message === 'Invalid email address') {
        toast.error('Email is not valid');
        return;
      }
      logger(err);
      toast.error('Something went wrong');
    }
  };

  const orderId = data?.result as number;

  return { handleCreateOrder, isLoading, isSuccess, orderId };
};

export default CreateOrderCall;
