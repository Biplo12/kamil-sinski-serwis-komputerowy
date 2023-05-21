import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import React from 'react';

import StatsCard from '@/components/Dashboard/Main/Partials/StatsCard';

import { useAppSelector } from '@/store/store-hooks';

import { selectStats } from '@/state/statsSlice';
const StatsCards: React.FC = (): JSX.Element => {
  const stats = useAppSelector(selectStats);
  const statistics = stats?.statistics;
  const statsCardData = [
    {
      value: statistics?.orders?.total,
      stats: statistics?.orders?.percentage?.total.lastMonth,
      label: 'Total orders',
      icon: <ReceiptOutlinedIcon />,
    },
    {
      value: statistics?.orders?.active,
      stats: statistics?.orders?.percentage?.active.lastMonth,
      label: 'Active orders',
      icon: <FeedOutlinedIcon />,
    },
    {
      value: statistics?.users?.total,
      stats: statistics?.orders?.percentage?.total.lastMonth,
      label: 'Total Users',
      icon: <PeopleOutlinedIcon />,
    },
    {
      value: statistics?.pageViews,
      stats: 0,
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
