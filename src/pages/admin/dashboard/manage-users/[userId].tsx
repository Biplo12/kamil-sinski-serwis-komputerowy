import { useRouter } from 'next/router';
import React, { useState } from 'react';

import useValidateUserId from '@/hooks/Users/useValidateUserId';

import Loading from '@/components/Common/Loading';
import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import InvalidUserId from '@/components/Dashboard/UserDetails/Partials/InvalidUserId';
import UserDetailsMain from '@/components/Dashboard/UserDetails/UserDetailsMain';

export default function UserDetails() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);

  const router = useRouter();
  const { userId } = router.query;
  const parsedUserId = parseInt(userId as string);
  const { isLoading, isValidUserId } = useValidateUserId(userId as string);

  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      {isLoading && <Loading />}
      {!isLoading && isValidUserId && (
        <UserDetailsMain sidebarState={sidebarState} userId={parsedUserId} />
      )}
      {!isLoading && !isValidUserId && (
        <InvalidUserId sidebarState={sidebarState} />
      )}
    </div>
  );
}
