import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchUserById = (userId: number, enabled: boolean) => {
  return useQuery(
    ['userById', userId],
    async () => {
      const { data } = await axios.get(`/api/users/viewuser?userId=${userId}`);
      return data;
    },
    { enabled }
  );
};

export default useFetchUserById;
