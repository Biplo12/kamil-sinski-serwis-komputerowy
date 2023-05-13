import axios from 'axios';
import { useQuery } from 'react-query';

interface IFilters {
  [key: string]: string | number | undefined;
}

const useFetchOrders = (enabled = true, filters?: IFilters) => {
  return useQuery(
    'orders',
    async () => {
      const params = filters ? { ...filters } : {};

      const { data } = await axios.get('/api/orders/vieworders', {
        params,
      });
      return data;
    },
    { cacheTime: 0, enabled }
  );
};

export default useFetchOrders;
