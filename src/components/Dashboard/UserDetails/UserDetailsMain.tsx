import React from 'react';

import useSaveUser from '@/hooks/Users/useSaveUser';

import Loading from '@/components/Common/Loading';
import TopBar from '@/components/Dashboard/Layout/TopBar';
import UserInfo from '@/components/Dashboard/UserDetails/Partials/UserInfo';
import UserNotFound from '@/components/Dashboard/UserDetails/Partials/UserNotFound';

interface IUserDetailsMain {
  sidebarState: boolean;
  userId: number;
}

const UserDetailsMain: React.FC<IUserDetailsMain> = ({
  sidebarState,
  userId,
}): JSX.Element => {
  const { isInitialLoading, isError, isUserNotFound } = useSaveUser(userId);
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
      {!isInitialLoading && !isError && <UserInfo />}
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
