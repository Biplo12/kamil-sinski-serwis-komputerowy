import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const useEditOrder = (
  ordertitle: string | null | undefined,
  orderdescription: string | null | undefined,
  price: number | string | null | undefined,
  orderId: number | null | undefined
) => {
  return useQuery(
    ['createOrder'],
    async () => {
      const { data } = await axios.put(`/api/orders/editorder`, {
        ordertitle: ordertitle || '',
        orderdescription: orderdescription || '',
        price: typeof price === 'number' ? price : parseFloat(price || '0'),
        orderId: orderId || 0,
      });
      return data;
    },
    {
      enabled: false,
    }
  );
};

export default useEditOrder;
