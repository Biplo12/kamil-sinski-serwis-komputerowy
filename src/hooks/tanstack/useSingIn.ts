import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useSignIn = (email: string, password: string) => {
  return useMutation(async () => {
    const { data } = await axios.post('/api/auth/signIn', {
      params: {
        email,
        password,
      },
    });
    return data;
  });
};

export default useSignIn;
