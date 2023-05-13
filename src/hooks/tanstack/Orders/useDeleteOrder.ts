import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useDeleteOrder = (orderId: number | null) => {
  return useMutation(async () => {
    const { data } = await axios.delete('/api/orders/deleteorder', {
      data: {
        orderId,
      },
    });
    return data;
  });
};

export default useDeleteOrder;
