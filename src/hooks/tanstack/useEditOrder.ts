import axios from 'axios';
import { useQuery } from 'react-query';

const useEditOrder = (
  ordertitle: string | null | undefined,
  orderdescription: string | null | undefined,
  price: number | string | null | undefined,
  orderId: number | null | undefined
) => {
  const { data, isLoading, error, refetch, isError } = useQuery({
    queryKey: ['createOrder'],
    queryFn: async () => {
      const { data } = await axios.put(`/api/orders/editorder`, {
        ordertitle: ordertitle || '',
        orderdescription: orderdescription || '',
        price: typeof price === 'number' ? price : parseFloat(price || '0'),
        orderId: orderId || 0,
      });
      return data;
    },
    enabled: false,
  });
  return { data, error, isLoading, refetch, isError };
};

export default useEditOrder;
