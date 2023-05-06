import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { useRouter } from 'next/router';
import React from 'react';

import SearchInput from '@/components/Dashboard/Main/Partials/SearchInput';

const TopBar: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { pathname } = router;
  const DASHBOARD_MENU_ITEMS = [
    {
      pathname: '/admin/dashboard',
      title: 'Dashboard',
      icon: <HomeOutlinedIcon />,
    },
    {
      pathname: '/admin/dashboard/orders',
      title: 'Orders',
      icon: <ReceiptOutlinedIcon />,
    },
    {
      pathname: '/admin/dashboard/users',
      title: 'Users',
      icon: <PeopleOutlinedIcon />,
    },
    {
      pathname: '/admin/dashboard/website-analytics',
      title: 'Website Analytics',
      icon: <AssessmentOutlinedIcon />,
    },
    {
      pathname: '/admin/dashboard/social-media',
      title: 'Social Media',
      icon: <InterestsOutlinedIcon />,
    },
    {
      pathname: '/admin/dashboard/create-order',
      title: 'Create New Order',
      icon: <FeedOutlinedIcon />,
    },
    {
      pathname: '/admin/dashboard/manage-orders',
      title: 'Manage Orders',
      icon: <FeedOutlinedIcon />,
    },
  ];
  let currentMenuItem = DASHBOARD_MENU_ITEMS.find(
    (item) => item.pathname === pathname || pathname.includes(item.pathname)
  );
  if (
    currentMenuItem?.title === 'Dashboard' &&
    pathname !== '/admin/dashboard'
  ) {
    currentMenuItem = DASHBOARD_MENU_ITEMS.filter(
      (item) =>
        item.pathname !== '/admin/dashboard' && item.title !== 'Dashboard'
    ).find((item) => pathname.includes(item.pathname));
  }
  const title = currentMenuItem ? currentMenuItem.title : '';
  const icon = currentMenuItem ? currentMenuItem.icon : <></>;
  return (
    <div className='exsm:flex-col my-4 flex w-full items-center justify-between gap-3'>
      <SearchInput />
      <button className='bg-pylon exsm:w-full exsm:justify-center exsm:gap-2 relative inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
        <FileDownloadRoundedIcon />
        <h2 className='exsm:flex hidden'>Download</h2>
      </button>
      <div className='bg-sea exsm:w-full exsm:justify-center exsm:gap-2 relative inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
        {icon}
        <h2 className='exsm:flex hidden'>{title}</h2>
      </div>
    </div>
  );
};
export default TopBar;
