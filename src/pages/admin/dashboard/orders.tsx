import React, { useState } from 'react';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import ManageOrders from '@/components/Dashboard/ManageOrders/ManageOrders';

export default function OrdersPage() {
  const [sidebarState, setSidebarState] = useState<boolean>(false);

  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      <ManageOrders sidebarState={sidebarState} />
    </div>
  );
}
