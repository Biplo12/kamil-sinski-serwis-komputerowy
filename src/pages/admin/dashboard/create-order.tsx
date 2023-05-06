import React, { useState } from 'react';

import CreateOrder from '@/components/Dashboard/CreateOrder/CreateOrder';
import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
export default function CreateOrderPage() {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      <CreateOrder sidebarState={sidebarState} />
    </div>
  );
}
