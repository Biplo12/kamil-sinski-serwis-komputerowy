import axios from 'axios';
import { useQuery } from 'react-query';

const useCreateOrder = (
  firstname: string | null | undefined,
  lastname: string | null | undefined,
  email: string | null | undefined,
  phonenumber: string | number | null | undefined,
  ordertitle: string | null | undefined,
  orderdescription: string | null | undefined,
  price: number | string | null | undefined
) => {
  const { data, isLoading, error, refetch, isError } = useQuery({
    queryKey: ['createOrder'],
    queryFn: async () => {
      const { data } = await axios.post(`/api/orders/createorder`, {
        firstname,
        lastname,
        email,
        phonenumber: parseInt(phonenumber?.toString() || '0'),
        ordertitle,
        orderdescription,
        price: parseFloat(price?.toString() || '0'),
      });
      return data;
    },
    enabled: false,
  });
  return { data, error, isLoading, refetch, isError };
};

export default useCreateOrder;
