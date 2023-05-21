import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchStatistics = (enabled: boolean) => {
  return useQuery(
    ['stats'],
    async () => {
      const { data } = await axios.get(`/api/stats/getOrdersAndUsersStats`);
      return data;
    },
    { enabled }
  );
};

export default useFetchStatistics;
