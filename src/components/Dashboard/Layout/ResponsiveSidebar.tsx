import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Link from 'next/link';
import React, { Fragment } from 'react';

import navItems from '@/components/Common/navItems';
import ResponsiveNavItem from '@/components/Dashboard/Layout/Partials/ResponsiveNavItem';

const ResponsiveSidebar: React.FC = (): JSX.Element => {
  return (
    <>
      <aside
        id='logo-sidebar'
        className='mxslg:block fixed left-0 top-0 z-40 hidden h-auto min-h-screen w-16 border-r border-gray-700 bg-gray-800 pt-20 transition-transform'
        aria-label='Sidebar'
      >
        <div className='mt-3 flex items-center justify-center overflow-y-auto'>
          <>
            <ul className='flex flex-col gap-3 space-y-2 font-medium'>
              {navItems.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <ResponsiveNavItem icon={item.icon} to={item.to} />
                  </Fragment>
                );
              })}
            </ul>
          </>
        </div>
        <div className='absolute bottom-0 left-0 mb-3 flex w-full items-center justify-center'>
          <Link
            href='/admin/dashboard/settings'
            className='flex items-center justify-center rounded-lg p-2 text-white hover:bg-gray-700'
          >
            <svg
              aria-hidden='true'
              fill='currentColor'
              className='group-hover: h-6 w-6 text-gray-400 transition duration-75 group-hover:text-white'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <SettingsRoundedIcon />
            </svg>
          </Link>
        </div>
      </aside>
    </>
  );
};
export default ResponsiveSidebar;
