import { useEffect } from 'react';

import useFetchUserById from '@/hooks/tanstack/Users/useFetchUserById';

import { useAppDispatch } from '@/store/store-hooks';

import { setUser } from '@/state/userSlice';

interface IAxiosError {
  response: {
    data: {
      message: string;
    };
  };
}

const useSaveUser = (userId: number) => {
  const dispatch = useAppDispatch();
  const { data, isInitialLoading, error, isError } = useFetchUserById(
    userId,
    true
  );
  const axiosError = (error as IAxiosError)?.response?.data?.message;
  const isUserNotFound = axiosError === 'User not found';

  useEffect(() => {
    if (!data?.result) return;
    dispatch(setUser(data?.result));
  }, [data?.result, dispatch]);

  return {
    isInitialLoading,
    error,
    isError,
    isUserNotFound,
  };
};

export default useSaveUser;
