import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import React from 'react';

import StatsCard from '@/components/Dashboard/Main/Partials/StatsCard';
const StatsCards: React.FC = (): JSX.Element => {
  const statsCardData = [
    {
      value: 100,
      label: 'Total orders',
      icon: <ReceiptOutlinedIcon />,
    },
    {
      value: 100,
      label: 'Active orders',
      icon: <FeedOutlinedIcon />,
    },
    {
      value: 100,
      label: 'Total Users',
      icon: <PeopleOutlinedIcon />,
    },
    {
      value: 100,
      label: 'Website visits',
      icon: <AssessmentOutlinedIcon />,
    },
  ];
  return (
    <div className='mxslg:flex mxslg:flex-col mb-6 grid h-[11.5rem] grid-cols-4 gap-4'>
      {statsCardData.map((item, index) => {
        return (
          <div key={index} className='border-pylon rounded border'>
            <StatsCard value={item.value} label={item.label} icon={item.icon} />
          </div>
        );
      })}
    </div>
  );
};
export default StatsCards;
