import React, { useState } from 'react';

import useSaveOrders from '@/hooks/Orders/useSaveOrders';
import useSaveStats from '@/hooks/Others/useSaveStats';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import Main from '@/components/Dashboard/Main/Main';

export default function DashboardPage() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  useSaveOrders();
  useSaveStats();
  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      <Main sidebarState={sidebarState} />
    </div>
  );
}
