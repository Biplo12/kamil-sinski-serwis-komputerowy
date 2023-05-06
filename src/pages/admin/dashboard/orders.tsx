import React, { useEffect, useState } from 'react';

import useFetchOrders from '@/hooks/tanstack/useFetchOrders';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import ManageOrders from '@/components/Dashboard/ManageOrders/ManageOrders';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectOrder, setOrders } from '@/state/orderSlice';

export default function OrdersPage() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrder);
  const filters = {
    limit: 100,
    orderBy: 'createdAt',
    orderDirection: 'desc',
  };
  const { refetch } = useFetchOrders(filters, false);
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
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      <ManageOrders sidebarState={sidebarState} />
    </div>
  );
}
