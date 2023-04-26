import React from 'react';

import Navbar from '@/components/Dashboard/Partials/Navbar';
import Sidebar from '@/components/Dashboard/Partials/Sidebar';
const Dashboard: React.FC = (): JSX.Element => {
  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <Sidebar />
      <div className='ml-[17rem] mt-8 h-full p-4'>
        <div className='mt-14 h-screen rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700'>
          <div className='mb-4 grid h-[32%] grid-cols-4 gap-4'>
            <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
            <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
            <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
            <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
          </div>

          <div className='h-f mb-4 grid h-[32%] grid-cols-3 gap-4'>
            <div className='col-span-2 flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
            <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
          </div>

          <div className='mb-4 grid h-[32%] grid-cols-3 gap-4'>
            <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
            <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
            <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
