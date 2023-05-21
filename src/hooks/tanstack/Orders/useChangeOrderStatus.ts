import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useChangeOrderStatus = (
  status: string | null | undefined,
  orderId: number | null | undefined
) => {
  return useMutation(['changeOrderStatus'], async () => {
    const { data } = await axios.put(`/api/orders/changeStatus`, {
      status: status?.toLowerCase() || '',
      orderId: orderId || 0,
    });
    return data;
  });
};

export default useChangeOrderStatus;
