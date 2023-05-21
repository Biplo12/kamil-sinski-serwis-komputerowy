import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useDeleteUser = (userId: number | null) => {
  return useMutation(async () => {
    const { data } = await axios.delete('/api/users/deleteUser', {
      params: {
        userId,
      },
    });
    return data;
  });
};

export default useDeleteUser;
