import Link from 'next/link';
import React from 'react';

interface IResponsiveMenu {
  menuState: boolean;
  links: { href: string; label: string }[];
}

const ResponsiveMenu: React.FC<IResponsiveMenu> = ({
  menuState,
  links,
}): JSX.Element => {
  //TODO: SOCIAL LINKS
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
    </div>
  );
};
export default ResponsiveMenu;
