import axios from 'axios';
import { useQuery } from 'react-query';

const useFetchOrderById = (
  orderId: number | null | undefined,
  enabled: boolean
) => {
  const { data, isLoading, error, refetch, isError } = useQuery({
    queryKey: ['orderById', orderId],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/orders/vieworder?orderId=${orderId}`
      );
      return data;
    },
    enabled,
  });
  return { data, error, isLoading, refetch, isError };
};

export default useFetchOrderById;
