import axios from 'axios';
import { useMutation } from 'react-query';

const useDeleteOrder = (orderId: number | null) => {
  return useMutation(async () => {
    const { data } = await axios.delete('/api/orders/deleteorder', {
      data: {
        orderId: orderId || 0,
      },
    });
    return data;
  });
};

export default useDeleteOrder;
