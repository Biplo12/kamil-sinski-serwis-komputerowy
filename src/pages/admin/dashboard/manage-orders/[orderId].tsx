import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import OrderDetailsMain from '@/components/Dashboard/OrderDetails/OrderDetailsMain';
import OrderIdInvalid from '@/components/Dashboard/OrderDetails/Partials/OrderIdInvalid';
export default function OrderDetails() {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  const [isValidOrderId, setIsValidOrderId] = useState<boolean>(false);
  const router = useRouter();
  const { orderId } = router.query;
  const orderIdString = Array.isArray(orderId)
    ? orderId[0]
    : orderId?.toString();
  useEffect(() => {
    if (!orderId || orderId.length !== 6) {
      setIsValidOrderId(false);
    } else {
      setIsValidOrderId(true);
    }
  }, [orderId]);
  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      {isValidOrderId ? (
        <OrderDetailsMain sidebarState={sidebarState} orderId={orderIdString} />
      ) : (
        <OrderIdInvalid sidebarState={sidebarState} orderId={orderIdString} />
      )}
    </div>
  );
}
