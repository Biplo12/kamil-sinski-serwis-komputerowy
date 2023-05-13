import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchUserById = (userId: string, enabled: boolean) => {
  const { data, isLoading, error, refetch, isError } = useQuery(
    ['userById', userId],
    async () => {
      const { data } = await axios.get(`/api/users/viewuser?userId=${userId}`);
      return data;
    },
    { enabled }
  );
  return { data, error, isLoading, refetch, isError };
};

export default useFetchUserById;
