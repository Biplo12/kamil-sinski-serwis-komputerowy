import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Link from 'next/link';
import React, { Fragment, useEffect } from 'react';

import { useToggleHook } from '@/hooks';

import NavItem from '@/components/Dashboard/Partials/NavItem';
import NotifyMessage from '@/components/Dashboard/Partials/NotifyMessage';
import ResizeMenuButton from '@/components/Dashboard/Partials/ResizeMenuButton';

interface ISidebar {
  setSidebarState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<ISidebar> = ({ setSidebarState }): JSX.Element => {
  const { toggle, state } = useToggleHook(true);

  useEffect(() => {
    setSidebarState(state);
  }, [setSidebarState, state]);

  const navItems = [
    {
      label: 'Dashboard',
      icon: <HomeOutlinedIcon />,
      to: '/admin/dashboard',
    },

    {
      label: 'Manage Orders',
      icon: <ReceiptOutlinedIcon />,
      to: '/admin/dashboard/orders',
    },
    {
      label: 'Manage Users',
      icon: <PeopleOutlinedIcon />,
      to: '/users',
    },
    {
      label: 'Website Analytics',
      icon: <AssessmentOutlinedIcon />,
      to: '/admin/dashboard/website-analytics',
    },
    {
      label: 'Social Media Analytics',
      icon: <InterestsOutlinedIcon />,
      to: '/admin/dashboard/social-media-analytics',
    },

    {
      label: 'Create New Order',
      icon: <FeedOutlinedIcon />,
      to: '/admin/dashboard/create-order',
    },
  ];
  return (
    <>
      <aside
        id='logo-sidebar'
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-700 bg-gray-800 pt-20 transition-transform ${
          state ? 'translate-x-0' : '-translate-x-[93%]'
        }`}
        aria-label='Sidebar'
      >
        <div
          className={`mt-3 overflow-y-auto px-5 py-4 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <>
            <ul className='flex flex-col gap-3 space-y-2 font-medium'>
              {navItems.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <NavItem label={item.label} icon={item.icon} to={item.to} />
                  </Fragment>
                );
              })}
            </ul>
            <div className='my-4 space-y-2 border-t border-gray-200 pt-4 font-medium dark:border-gray-700' />
            <ul className='flex flex-col items-start justify-between space-y-2 font-medium'>
              <NotifyMessage />
            </ul>
          </>
        </div>
        <ResizeMenuButton handleOpen={toggle} open={state} />
        <div
          className={`absolute bottom-0 left-0 w-full px-5 py-4 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <Link
            href='/admin/dashboard/settings'
            className='flex items-center rounded-lg p-2 text-white hover:bg-gray-700'
          >
            <svg
              aria-hidden='true'
              className='group-hover: h-6 w-6 text-gray-400 transition duration-75 group-hover:text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <SettingsRoundedIcon />
            </svg>
            <span className='ml-3'>Settings</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
