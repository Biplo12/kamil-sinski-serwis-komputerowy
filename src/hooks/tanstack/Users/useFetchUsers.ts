import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface IFilters {
  [key: string]: string | number | undefined;
}

const useFetchUsers = (enabled = true, filters?: IFilters) => {
  return useQuery(
    ['users'],
    async () => {
      const params = filters ? { ...filters } : {};
      const { data } = await axios.get('/api/users/viewusers', {
        params,
      });
      return data;
    },
    { enabled }
  );
};

export default useFetchUsers;
