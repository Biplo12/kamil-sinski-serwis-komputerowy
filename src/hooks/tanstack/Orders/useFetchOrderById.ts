import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchOrderById = (
  orderId: number | null | undefined,
  enabled: boolean
) => {
  return useQuery(
    ['orderById', orderId],
    async () => {
      const { data } = await axios.get(
        `/api/orders/getOrder?orderId=${orderId}`
      );
      return data;
    },
    { enabled }
  );
};

export default useFetchOrderById;
