import React, { useEffect, useState } from 'react';

import useFetchOrders from '@/hooks/tanstack/useFetchOrders';
import useFetchStatistics from '@/hooks/tanstack/useFetchStatistics';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import Main from '@/components/Dashboard/Main/Main';

import { useAppDispatch } from '@/store/store-hooks';

import { setOrders, setStats } from '@/state/orderSlice';
export default function DashboardPage() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const filters = {
    limit: 100,
    orderBy: 'createdAt',
    orderDirection: 'desc',
  };

  const { data } = useFetchOrders(filters, true);
  const { data: statsData } = useFetchStatistics(true);

  useEffect(() => {
    dispatch(setOrders(data?.result));
    dispatch(setStats(statsData?.result));
  }, [data, statsData, dispatch]);
  return (
    <>
      <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
        <Navbar />
        <ResponsiveSidebar />
        <Sidebar setSidebarState={setSidebarState} />
        <Main sidebarState={sidebarState} />
      </div>
    </>
  );
}
