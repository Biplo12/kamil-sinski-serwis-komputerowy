import Link from 'next/link';

import {
  useDisableScroll,
  useIsTop,
  useScrollDirection,
  useToggleHook,
  useToggleOnResize,
} from '@/hooks';

import ResponsiveMenu from '@/components/layout/ResponsiveMenu';

import ResponsiveNavbarIcon from '~/svg/ResponsiveNavbarIcon';

const links = [
  { href: '/', label: 'Strona główna' },
  { href: '/o-mnie', label: 'O mnie' },
  { href: '/dlaczego-ja', label: 'Dlaczego ja?' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/nasze-uslugi', label: 'Nasze usługi' },
  { href: '/status-zlecenia', label: 'Status zlecenia' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const responsiveMenu = useToggleHook(false);
  const isTop = useIsTop();
  useToggleOnResize(640, responsiveMenu.state, responsiveMenu.toggle);
  const scrollDirection = useScrollDirection();
  useDisableScroll(responsiveMenu.state);
  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full px-10 duration-300 ${
          scrollDirection === 'down' ? 'mxsm:-top-[11rem] -top-36' : 'top-0'
        } ${isTop || responsiveMenu.state ? '' : 'bg-pylon'}`}
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
            <ul className='flex items-center justify-between space-x-4 text-white'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`} className='mxlg:hidden flex'>
                  <Link
                    href={href}
                    className='link link-underline link-underline-black text-l'
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
