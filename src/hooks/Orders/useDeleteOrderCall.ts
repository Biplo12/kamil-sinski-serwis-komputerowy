import toast from 'react-hot-toast';

import useDeleteOrder from '@/hooks/tanstack/Orders/useDeleteOrder';
import useFetchOrders from '@/hooks/tanstack/Orders/useFetchOrders';

import { useAppDispatch } from '@/store/store-hooks';

import { setOrders } from '@/state/orderSlice';

const useDeleteOrderCall = (orderId: number) => {
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

  return { deleteOrder, isLoading };
};

export default useDeleteOrderCall;
