import axios from 'axios';
import { useQuery } from 'react-query';

const useFetchStatistics = () => {
  const { data, isLoading, error, refetch, isError } = useQuery(
    'stats',
    async () => {
      const { data } = await axios.get(`/api/stats/ordersandusersstatistics`);
      return data;
    },
    { cacheTime: 0 }
  );

  return { data, error, isLoading, refetch, isError };
};

export default useFetchStatistics;
