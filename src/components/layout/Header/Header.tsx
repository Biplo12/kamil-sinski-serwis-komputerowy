import Link from 'next/link';

import {
  useDisableScroll,
  useIsTop,
  useScrollDirection,
  useToggleHook,
  useToggleOnResize,
} from '@/hooks';

import links from '@/components/Common/links';

import ResponsiveMenu from './ResponsiveMenu';

import ResponsiveNavbarIcon from '~/svg/ResponsiveNavbarIcon';

export default function Header() {
  const responsiveMenu = useToggleHook(false);
  const isTop = useIsTop();
  useToggleOnResize(640, responsiveMenu.state, responsiveMenu.toggle);
  const scrollDirection = useScrollDirection();
  useDisableScroll(responsiveMenu.state);
  return (
    <>
      <header
        className={`bg-pylon fixed left-0 z-50 w-full px-10 py-2 duration-300 ${
          scrollDirection === 'down' ? 'mxsm:-top-[11rem] -top-36' : 'top-0'
        } ${isTop || responsiveMenu.state ? 'bg-transparent' : 'bg-pylon'}`}
      >
        <div
          className={`layout flex h-[9vh] w-full items-center ${
            responsiveMenu.state ? 'justify-end' : 'justify-between'
          }`}
        >
          <Link
            href='/'
            className={`${responsiveMenu.state ? 'hidden' : 'block'}`}
          >
            <img src='/images/small-logo-blue.png' alt='small-logo' />
          </Link>
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`} className='mxlg:hidden flex'>
                  <Link
                    href={href}
                    className={`link link-underline ${
                      isTop ? 'link-underline-blue' : 'link-underline-white'
                    } text-l`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li
                onClick={() => responsiveMenu.toggle()}
                className='mxlg:block hidden cursor-pointer'
              >
                <ResponsiveNavbarIcon menuState={responsiveMenu.state} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <ResponsiveMenu menuState={responsiveMenu.state} links={links} />
    </>
  );
}
