import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useCreateOrder = (
  firstname: string | null | undefined,
  lastname: string | null | undefined,
  email: string | null | undefined,
  phonenumber: string | number | null | undefined,
  ordertitle: string | null | undefined,
  orderdescription: string | null | undefined,
  price: number | string | null | undefined
) => {
  return useMutation(['createOrder'], async () => {
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
  });
};

export default useCreateOrder;
