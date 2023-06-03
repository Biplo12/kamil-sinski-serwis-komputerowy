import React, { useState } from 'react';

import useSaveUsers from '@/hooks/Users/useSaveUsers';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import ManageUsers from '@/components/Dashboard/ManageUsers/ManageUsers';

export default function UsersPage() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  useSaveUsers();
  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      <ManageUsers sidebarState={sidebarState} />
    </div>
  );
}
