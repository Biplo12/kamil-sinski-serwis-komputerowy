import Link from 'next/link';
import React, { Fragment } from 'react';

import contactInfoData from '@/components/Common/contactInfoData';
import ResponsiveContactIcon from '@/components/Contact/Partials/ResponsiveContactIcon';

interface IResponsiveMenu {
  menuState: boolean;
  links: { href: string; label: string }[];
}

const ResponsiveMenu: React.FC<IResponsiveMenu> = ({
  menuState,
  links,
}): JSX.Element => {
  return (
    <div
      className={`bg-pylon fixed right-0 top-0 z-40 flex h-full w-full items-center justify-center duration-300 ease-in-out ${
        menuState ? 'translate-x-0 ' : 'translate-x-full'
      }`}
    >
      <ul className='flex-colspace-y-4 flex flex-col gap-3 text-center'>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href} className='text-xl'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className='relative'>
        <div className='min-h-12 min-w-12 fixed bottom-0 left-[50%] flex -translate-x-[50%] items-center justify-center gap-5 p-5'>
          {contactInfoData.map((icon, index) => (
            <Fragment key={index}>
              <ResponsiveContactIcon icon={icon.icon} href={icon.href} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ResponsiveMenu;
