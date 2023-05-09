import React, { useEffect, useState } from 'react';

import useFetchUsers from '@/hooks/tanstack/useFetchUsers';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import ManageUsers from '@/components/Dashboard/ManageUsers/ManageUsers';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectUser, setUsers } from '@/state/userSlice';

export default function UsersPage() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUser);
  const { refetch } = useFetchUsers(false);

  useEffect(() => {
    const fetchData = async () => {
      if (users.users && users.users.length > 0) return;
      const { data } = await refetch();
      if (!data) return;
      dispatch(setUsers(data?.result));
    };
    fetchData();
  }, [users.users, refetch, dispatch]);

  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      <ManageUsers sidebarState={sidebarState} />
    </div>
  );
}
