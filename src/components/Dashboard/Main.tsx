import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import React, { Fragment } from 'react';

import SearchInput from '@/components/Dashboard/Partials/SearchInput';
import TopStatCard from '@/components/Dashboard/Partials/TopStatCard';

interface IMain {
  sidebarState: boolean;
}

const Main: React.FC<IMain> = ({ sidebarState }): JSX.Element => {
  const statsCardData = [
    {
      value: Math.floor(Math.random() * 1000).toString(),
      label: 'Total orders',
      icon: <ReceiptOutlinedIcon />,
    },
    {
      value: Math.floor(Math.random() * 1000).toString(),
      label: 'Active orders',
      icon: <FeedOutlinedIcon />,
    },
    {
      value: Math.floor(Math.random() * 1000).toString(),
      label: 'Total Users',
      icon: <PeopleOutlinedIcon />,
    },
    {
      value: Math.floor(Math.random() * 1000).toString(),
      label: 'Website visits',
      icon: <AssessmentOutlinedIcon />,
    },
  ];

  return (
    <div
      className={`${
        sidebarState ? 'ml-[17rem]' : 'ml-8 mr-2'
      } mt-[5.3rem] h-full p-4 pt-0 duration-300 ease-in-out`}
    >
      <div className='my-4 flex w-full items-center justify-between gap-3'>
        <SearchInput />
        <button className='bg-pylon relative inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
          <FileDownloadRoundedIcon />
        </button>
        <div className='bg-sea relative inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
          <HomeOutlinedIcon />
        </div>
      </div>
      <div className='h-[calc(100vh-11rem)] rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700'>
        <div className='mb-4 grid h-[11.5rem] grid-cols-4 gap-4'>
          {statsCardData.map((item, index: number) => {
            return (
              <Fragment key={index}>
                <TopStatCard
                  value={item.value}
                  label={item.label}
                  icon={item.icon}
                />
              </Fragment>
            );
          })}
        </div>

        <div className='h-f mb-4 grid h-[15.5rem] grid-cols-3 gap-4'>
          <div className='col-span-2 flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
          <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
        </div>

        <div className='mb-4 grid h-64 grid-cols-3 gap-4'>
          <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
          <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
          <div className='flex h-full items-center justify-center rounded bg-gray-50 dark:bg-gray-800'></div>
        </div>
      </div>
    </div>
  );
};
export default Main;
