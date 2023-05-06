import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import React from 'react';

import StatsCard from '@/components/Dashboard/Main/Partials/StatsCard';

import { useAppSelector } from '@/store/store-hooks';

import { selectOrder } from '@/state/orderSlice';
const StatsCards: React.FC = (): JSX.Element => {
  const orders = useAppSelector(selectOrder);
  const ordersStats = orders?.ordersStatistics;
  const statsCardData = [
    {
      value: ordersStats?.orders?.total,
      stats: ordersStats?.orders?.percentage?.total.lastMonth,
      label: 'Total orders',
      icon: <ReceiptOutlinedIcon />,
    },
    {
      value: ordersStats?.orders?.active,
      stats: ordersStats?.orders?.percentage?.active.lastMonth,
      label: 'Active orders',
      icon: <FeedOutlinedIcon />,
    },
    {
      value: ordersStats?.users?.total,
      stats: ordersStats?.orders?.percentage?.total.lastMonth,
      label: 'Total Users',
      icon: <PeopleOutlinedIcon />,
    },
    {
      value: 100,
      stats: ordersStats?.orders?.percentage?.total.lastMonth,
      label: 'Website visits',
      icon: <AssessmentOutlinedIcon />,
    },
  ];
  return (
    <div className='mxslg:flex mxslg:flex-col mb-6 grid h-[11.5rem] grid-cols-4 gap-4'>
      {statsCardData.map((item, index) => {
        return (
          <div key={index} className='border-pylon rounded border'>
            <StatsCard
              value={item.value}
              label={item.label}
              icon={item.icon}
              stats={item.stats}
            />
          </div>
        );
      })}
    </div>
  );
};
export default StatsCards;
