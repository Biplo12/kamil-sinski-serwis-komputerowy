import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Link from 'next/link';
import React, { Fragment, useEffect } from 'react';

import { useToggleHook } from '@/hooks';

import navItems from '@/components/Common/navItems';
import NavItem from '@/components/Dashboard/Layout/Partials/NavItem';
import NotifyMessage from '@/components/Dashboard/Layout/Partials/NotifyMessage';
import ResizeMenuButton from '@/components/Dashboard/Layout/Partials/ResizeMenuButton';

interface ISidebar {
  setSidebarState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<ISidebar> = ({ setSidebarState }): JSX.Element => {
  const { toggle, state } = useToggleHook(true);

  useEffect(() => {
    setSidebarState(state);
  }, [setSidebarState, state]);

  return (
    <>
      <aside
        id='logo-sidebar'
        className={`mxslg:hidden fixed left-0 top-0 z-40 block h-screen w-64 border-r border-gray-700 bg-gray-800 pt-20 transition-transform duration-300 ${
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
