import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import useSaveOrders from '@/hooks/Orders/useSaveOrders';
import useSaveStats from '@/hooks/Others/useSaveStats';

import Spinner from '@/components/Common/Spinner';
import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import Main from '@/components/Dashboard/Main/Main';

const SIGN_IN_PATH = '/admin/sign-in';

const CheckUserLoginStatus = () => {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      router.push(SIGN_IN_PATH);
    }
  }, [isLoaded, isSignedIn, router]);

  useSaveOrders();
  useSaveStats();
  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      {isSignedIn && isLoaded && (
        <>
          <Navbar />
          <ResponsiveSidebar />
          <Sidebar setSidebarState={setSidebarState} />
          <Main sidebarState={sidebarState} />
        </>
      )}
      {!isLoaded && (
        <div className='flex h-screen w-full items-center justify-center'>
          {/* TODO: REDIRECTING COMPONENT */}
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default CheckUserLoginStatus;
