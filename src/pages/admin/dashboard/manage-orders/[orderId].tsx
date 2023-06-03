import { useRouter } from 'next/router';
import React, { useState } from 'react';

import useValidateOrderId from '@/hooks/useValidateOrderId';

import Loading from '@/components/Common/Loading';
import Navbar from '@/components/Dashboard/Layout/Navbar';
import ResponsiveSidebar from '@/components/Dashboard/Layout/ResponsiveSidebar';
import Sidebar from '@/components/Dashboard/Layout/Sidebar';
import OrderDetailsMain from '@/components/Dashboard/OrderDetails/OrderDetailsMain';
import InvalidOrderId from '@/components/Dashboard/OrderDetails/Partials/InvalidOrderId';

export default function OrderDetails() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  const router = useRouter();
  const { orderId } = router.query;
  const parsedOrderId = parseInt(orderId as string);
  const { isLoading, isValidOrderId } = useValidateOrderId(orderId as string);

  return (
    <div className='bg-black-stalion flex h-auto min-h-screen w-full flex-col'>
      <Navbar />
      <ResponsiveSidebar />
      <Sidebar setSidebarState={setSidebarState} />
      {isLoading && <Loading />}
      {!isLoading && isValidOrderId && (
        <OrderDetailsMain sidebarState={sidebarState} orderId={parsedOrderId} />
      )}
      {!isLoading && !isValidOrderId && (
        <InvalidOrderId sidebarState={sidebarState} />
      )}
    </div>
  );
}
