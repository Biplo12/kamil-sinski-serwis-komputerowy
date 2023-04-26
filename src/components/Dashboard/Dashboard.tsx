import React from 'react';

import Navbar from '@/components/Dashboard/Partials/Navbar';
import Sidebar from '@/components/Dashboard/Partials/Sidebar';
const Dashboard: React.FC = (): JSX.Element => {
  return (
    <div className='bg-black-stalion flex h-screen w-full flex-col'>
      <Navbar />
      <Sidebar />
    </div>
  );
};
export default Dashboard;
