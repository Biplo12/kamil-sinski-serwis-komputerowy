import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchUserOrders = (userId: number, enabled: boolean) => {
  return useQuery(
    ['userOrders', userId],
    async () => {
      const { data } = await axios.get(
        `/api/users/getUserOrdersMany?userId=${userId}`
      );
      return data;
    },
    { enabled }
  );
};

export default useFetchUserOrders;
