import axios from 'axios';
import { useQuery } from 'react-query';

const useFetchUserById = (userId: string, enabled: boolean) => {
  const { data, isLoading, error, refetch, isError } = useQuery({
    queryKey: ['userById', userId],
    queryFn: async () => {
      const { data } = await axios.get(`/api/users/viewuser?userId=${userId}`);
      return data;
    },
    enabled,
  });
  return { data, error, isLoading, refetch, isError };
};

export default useFetchUserById;
