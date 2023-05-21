import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface IFilters {
  [key: string]: string | number | undefined;
}

const useFetchOrders = (enabled = true, filters?: IFilters) => {
  return useQuery(
    ['orders'],
    async () => {
      const params = filters ? { ...filters } : {};
      const { data } = await axios.get('/api/orders/getOrdersMany', {
        params,
      });
      return data;
    },
    { enabled }
  );
};

export default useFetchOrders;
