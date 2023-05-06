import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import React from 'react';

import TopBar from '@/components/Dashboard/Layout/TopBar';
import Analtyics from '@/components/Dashboard/Main/Partials/Analtyics';
import LineChartCard from '@/components/Dashboard/Main/Partials/LineChartCard';
import RecentOrders from '@/components/Dashboard/Main/Partials/RecentOrders';
import StatsCard from '@/components/Dashboard/Main/Partials/StatsCard';
import StatsCards from '@/components/Dashboard/Main/Partials/StatsCards';

interface IMain {
  sidebarState: boolean;
}

const Main: React.FC<IMain> = ({ sidebarState }): JSX.Element => {
  return (
    <div
      className={`${
        sidebarState ? 'ml-[17rem]' : 'ml-8'
      } mxslg:ml-16  mt-[5.3rem] h-auto min-h-screen px-4 duration-300 ease-in-out`}
    >
      <TopBar />
      <div className='h-auto min-h-[calc(100vh-13rem)] rounded-lg py-4'>
        <StatsCards />
        <div className='mxslg:flex mxslg:flex-col mxslg:mt-[41rem] mxslg:h-[26rem] mxslg:mb-[1rem] mb-[4.25rem] grid h-[16.5rem] grid-cols-3 gap-4'>
          <div className='border-pylon mxslg:pl-2 col-span-2 flex h-full items-center justify-center rounded border bg-gray-800 p-5'>
            <LineChartCard />
          </div>
          <div className='border-pylon scrollbar-thin scrollbar-thumb-pylon scrollbar-track-sea mxslg:min-h-[21rem] flex flex-col overflow-y-scroll rounded border bg-gray-800'>
            <RecentOrders />
          </div>
        </div>
        <div className='mxslg:flex mxslg:flex-col mxslg:mt-[17rem] grid h-[15.5rem] grid-cols-4 gap-4'>
          <div className='border-pylon flex h-full items-center justify-center rounded border bg-gray-800'>
            <StatsCard
              value={2000}
              label='Facebook likes'
              icon={<FacebookRoundedIcon />}
            />
          </div>
          <div className='border-pylon flex h-full items-center justify-center rounded border bg-gray-800'>
            <Analtyics />
          </div>
          <div className='border-pylon flex h-full items-center justify-center rounded border bg-gray-800'></div>
          <div className='border-pylon flex h-full items-center justify-center rounded border bg-gray-800'></div>
        </div>
      </div>
    </div>
  );
};
export default Main;
