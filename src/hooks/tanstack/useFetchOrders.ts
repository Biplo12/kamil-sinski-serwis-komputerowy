import axios from 'axios';
import { useQuery } from 'react-query';

interface IFilters {
  [key: string]: string | number;
}

const useFetchOrders = (filters: IFilters) => {
  const { data, isLoading, error, refetch, isError } = useQuery(
    'orders',
    async () => {
      let url = '/api/orders/vieworders';

      const queryString = Object.entries(filters)
        .map(([key, value]) => {
          if (value !== undefined && value !== null) {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
          return '';
        })
        .filter(Boolean)
        .join('&');

      if (queryString) {
        url += `?${queryString}`;
      }

      const { data } = await axios.get(url);
      return data;
    },
    { cacheTime: 0 }
  );

  return { data, error, isLoading, refetch, isError };
};

export default useFetchOrders;
