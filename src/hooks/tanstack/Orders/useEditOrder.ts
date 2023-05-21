import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
const useEditOrder = (
  ordertitle: string | null | undefined,
  orderdescription: string | null | undefined,
  price: number | string | null | undefined,
  orderId: number | null | undefined
) => {
  return useMutation(['createOrder'], async () => {
    const { data } = await axios.put(`/api/orders/editOrder`, {
      ordertitle: ordertitle || '',
      orderdescription: orderdescription || '',
      price: typeof price === 'number' ? price : parseFloat(price || '0'),
      orderId: orderId || 0,
    });
    return data;
  });
};

export default useEditOrder;
