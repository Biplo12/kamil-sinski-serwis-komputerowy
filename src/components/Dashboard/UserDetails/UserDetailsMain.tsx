import React, { useEffect } from 'react';

import useFetchUserById from '@/hooks/tanstack/Users/useFetchUserById';

import Loading from '@/components/Common/Loading';
import TopBar from '@/components/Dashboard/Layout/TopBar';
import UserNotFound from '@/components/Dashboard/UserDetails/Partials/UserNotFound';

import { useAppDispatch } from '@/store/store-hooks';

import { setUser } from '@/state/userSlice';

interface IUserDetailsMain {
  sidebarState: boolean;
  userId: number;
}

interface IAxiosError {
  response: {
    data: {
      message: string;
    };
  };
}

const UserDetailsMain: React.FC<IUserDetailsMain> = ({
  sidebarState,
  userId,
}): JSX.Element => {
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

  return (
    <div
      className={`${
        sidebarState ? 'ml-[17rem]' : 'ml-8'
      } mxslg:ml-16 min-h-[calc(100vh - 5.3rem)] mt-[5.3rem] h-auto px-4 duration-300 ease-in-out`}
    >
      <TopBar />
      <h1 className='mt-5 text-3xl font-semibold'>
        User - <span className='text-pylon'>{userId}</span>
      </h1>
      <div className='buser-pylon mxsm:w-0 buser-t mb-5 w-[215px]' />
      {isInitialLoading && !isUserNotFound && (
        <div className='flex h-[60vh] w-full items-center justify-center'>
          <Loading />
        </div>
      )}
      {/* {!isInitialLoading && !isError && (
        <UserInfo setLoading={setLoading} loading={loading} />
      )} */}
      {isUserNotFound && <UserNotFound />}
      {isError && !isUserNotFound && (
        <div className='flex h-[70vh] w-full items-center justify-center'>
          <span className='text-2xl font-semibold text-red-500'>
            Something went wrong...
          </span>
        </div>
      )}
    </div>
  );
};

export default UserDetailsMain;
