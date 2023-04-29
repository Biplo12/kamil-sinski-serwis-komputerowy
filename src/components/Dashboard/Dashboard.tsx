import React, { useState } from 'react';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import Main from '@/components/Dashboard/Main/Main';
const Dashboard: React.FC = (): JSX.Element => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      <Main sidebarState={sidebarState} />
    </div>
  );
};
export default Dashboard;
