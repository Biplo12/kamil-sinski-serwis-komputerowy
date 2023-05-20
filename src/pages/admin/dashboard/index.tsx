import React, { useEffect, useState } from 'react';

import useFetchOrders from '@/hooks/tanstack/Orders/useFetchOrders';
import useFetchStatistics from '@/hooks/tanstack/useFetchStatistics';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import Main from '@/components/Dashboard/Main/Main';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectOrder, setOrders } from '@/state/orderSlice';
import { setStats } from '@/state/statsSlice';
export default function DashboardPage() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrder);

  const { refetch } = useFetchOrders(false);
  const { data: statsData } = useFetchStatistics(true);

  useEffect(() => {
    if (!statsData) return;
    dispatch(setStats(statsData?.result));
  }, [statsData, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      if (orders.orders && orders.orders.length > 0) return;
      const { data } = await refetch();
      if (!data) return;
      dispatch(setOrders(data?.result));
    };
    fetchData();
  }, [orders.orders, refetch, dispatch]);

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
