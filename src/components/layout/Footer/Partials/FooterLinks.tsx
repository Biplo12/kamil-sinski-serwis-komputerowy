import Link from 'next/link';
import React from 'react';

import links from '@/components/Common/links';
const FooterLinks: React.FC = (): JSX.Element => {
  return (
    <div className='mxsm:max-w-[85%] flex max-w-[30%] flex-col items-start justify-center gap-5 text-left'>
      <h1 className='text-3xl font-bold'>Przydatne linki</h1>
      <nav className='flex gap-3'>
        <ul className='flex flex-col items-start justify-between gap-3'>
          {links
            .filter((link) => link.label !== 'O nas')
            .map(({ href, label }) => (
              <li key={`${href}${label}`} className='flex'>
                <Link
                  href={href}
                  className='link link-underline link-underline-white text-l'
                >
                  {label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
export default FooterLinks;
