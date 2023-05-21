import React from 'react';
import toast from 'react-hot-toast';

import useDeleteOrder from '@/hooks/tanstack/Orders/useDeleteOrder';
import useFetchOrders from '@/hooks/tanstack/Orders/useFetchOrders';

import Spinner from '@/components/Common/Spinner';

import { useAppDispatch } from '@/store/store-hooks';

import { setOrders } from '@/state/orderSlice';

interface IDeleteButton {
  orderId: number;
}

const DeleteButton: React.FC<IDeleteButton> = ({ orderId }): JSX.Element => {
  const { mutateAsync, isLoading } = useDeleteOrder(orderId);
  const { refetch } = useFetchOrders(false);
  const dispatch = useAppDispatch();

  const deleteOrder = async () => {
    try {
      await mutateAsync();
      const { data } = await refetch();
      dispatch(setOrders(data.result));
      toast.success('Order deleted successfully');
    } catch (error) {
      toast.error('Error deleting order');
    }
  };

  return (
    <button
      onClick={() => deleteOrder()}
      className='focus:shadow-outline flex max-h-[30px] min-w-[60px] items-center justify-center rounded-lg bg-red-600 px-3
    py-2 text-center text-xs
    font-bold text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : 'Delete'}
    </button>
  );
};
export default DeleteButton;
