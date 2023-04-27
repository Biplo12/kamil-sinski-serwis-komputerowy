import React, { useState } from 'react';

import Main from '@/components/Dashboard/Main';
import Navbar from '@/components/Dashboard/Partials/Navbar';
import Sidebar from '@/components/Dashboard/Partials/Sidebar';
const Dashboard: React.FC = (): JSX.Element => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <Sidebar setSidebarState={setSidebarState} />
      <Main sidebarState={sidebarState} />
    </div>
  );
};
export default Dashboard;
