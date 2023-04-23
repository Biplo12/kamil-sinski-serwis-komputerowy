import React, { useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import OrderStatus from '@/components/OrderStatus/OrderStatus';
import OrderStatusDetails from '@/components/OrderStatus/Partials/OrderStatusDetails';
import Seo from '@/components/Seo';

import { useAppSelector } from '@/store/store-hooks';

import { selectOrder } from '@/state/orderSlice';

export default function OrderStatusPage() {
  const order = useAppSelector(selectOrder);
  useEffect(() => {
    if (order.orderDetails) {
      window.scrollTo(0, 1000);
    }
  }, [order.orderDetails]);
  return (
    <>
      <Layout>
        <Seo />
        <OrderStatus />
        {order.orderDetails && <OrderStatusDetails />}
      </Layout>
    </>
  );
}
