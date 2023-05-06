import axios from 'axios';
import { useQuery } from 'react-query';

const useCreateOrder = (
  firstname: string,
  lastname: string,
  email: string,
  phonenumber: string,
  ordertitle: string,
  orderdescription: string,
  price: number
) => {
  const { data, isLoading, error, refetch, isError } = useQuery({
    queryKey: ['createOrder'],
    queryFn: async () => {
      const { data } = await axios.post(`/api/orders/createorder`, {
        firstname,
        lastname,
        email,
        phonenumber: parseInt(phonenumber.toString()),
        ordertitle,
        orderdescription,
        price: parseFloat(price.toString()),
      });
      return data;
    },
    enabled: false,
  });
  return { data, error, isLoading, refetch, isError };
};

export default useCreateOrder;
