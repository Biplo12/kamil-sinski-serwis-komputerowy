import { useToggleOnResize } from 'hooks/useToggleOnResize';
import { useToogleHook } from 'hooks/useToogleHook';
import Link from 'next/link';

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
  const responsiveMenu = useToogleHook(false);
  useToggleOnResize(640, responsiveMenu.state, responsiveMenu.toggle);

  return (
    <>
      <header className='bg-pylon sticky top-0 z-50 px-10'>
        <div className='layout flex h-[9vh] items-center justify-between'>
          <Link href='/'>
            <img src='/images/small-logo.png' alt='small-logo' />
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
                className='mxlg:flex hidden cursor-pointer'
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
