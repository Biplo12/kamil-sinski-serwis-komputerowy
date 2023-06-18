import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCheckAllowList = (enabled: boolean, email: string) => {
  return useQuery(
    ['stats'],
    async () => {
      const { data } = await axios.get(
        `/api/auth/checkAllowlist?email=${email}`
      );
      return data;
    },
    { enabled }
  );
};

export default useCheckAllowList;
