import axios from 'axios';
import { useQuery } from 'react-query';

import logger from '@/lib/logger';

const fetchOrderById = (orderId: string) => async () => {
  try {
    const { data } = await axios.get(`/api/orders/vieworder`, {
      params: {
        orderId,
      },
    });
    return data;
  } catch (err) {
    logger(err);
  }
};

const useFetchOrderById = (orderId: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['order', orderId],
    queryFn: fetchOrderById(orderId),
    enabled: false,
  });
  return { data, error, isLoading, refetch: fetchOrderById(orderId) };
};

export default useFetchOrderById;
