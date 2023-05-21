import React from 'react';
import toast from 'react-hot-toast';

import logger from '@/lib/logger';
import useCreateOrder from '@/hooks/tanstack/Orders/useCreateOrder';
import useFetchOrders from '@/hooks/tanstack/Orders/useFetchOrders';
import useFetchStatistics from '@/hooks/tanstack/useFetchStatistics';

import Loading from '@/components/Common/Loading';
import RedirectButton from '@/components/Dashboard/Common/RedirectButton';

import { useAppDispatch } from '@/store/store-hooks';

import validateMail from '@/helpers/validateMail';
import { CustomError, IOrderInputValues } from '@/interfaces';
import { setOrders } from '@/state/orderSlice';
import { setStats } from '@/state/statsSlice';

interface ICreateOrderButton {
  inputValues: IOrderInputValues;
}

const CreateOrderButton: React.FC<ICreateOrderButton> = ({
  inputValues,
}): JSX.Element => {
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

  return (
    <div className='flex gap-3'>
      <button
        className='from-pylon to-sea focus:shadow-outline mxsm:w-ful mxsm:min-w-full mt-6 flex min-w-[200px] items-center justify-center rounded-lg bg-gradient-to-r px-3
      py-2 text-center font-bold
      text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
        onClick={() => handleCreateOrder()}
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
