import Link from 'next/link';
import React from 'react';

import contactInfoData from '@/components/Common/contactInfoData';
import links from '@/components/Common/links';
import ContactIcon from '@/components/Contact/Partials/ContactIcon';
const Footer: React.FC = (): JSX.Element => {
  return (
    <div className='bg-blue flex items-center justify-between p-10'>
      <div className='flex max-w-[30%] flex-col items-start justify-center gap-5 text-left'>
        <h1 className='text-3xl font-bold'>O nas?</h1>
        <p>
          Nasza wizja to zapewnienie naszym klientom nie tylko najlepszych usług
          serwisowych, ale także kompleksowej obsługi i doradztwa w zakresie
          wyboru odpowiedniego sprzętu i oprogramowania do ich potrzeb. Stawiamy
          na indywidualne podejście do każdego klienta, aby zapewnić najlepsze
          rozwiązania zgodne z jego potrzebami.
        </p>
      </div>
      <div className='flex max-w-[30%] flex-col items-start justify-center gap-5 text-left'>
        <h1 className='text-3xl font-bold'>Przydatne linki</h1>
        <nav className='flex gap-3'>
          <ul className='flex flex-col items-start justify-between gap-3'>
            {links
              .slice(0, 4)
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
          <ul className='flex flex-col items-start justify-between gap-3'>
            {links.slice(4, 7).map(({ href, label }) => (
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
      <div className='flex max-w-[30%] flex-col items-start justify-center gap-5 text-left'>
        <h1 className='text-3xl font-bold'>Kontakt</h1>
        <div className='mxxsm:pt-0 mxxsm:hidden flex flex-col items-start justify-center gap-3'>
          {contactInfoData.map((icon, index) => (
            <>
              <ContactIcon
                key={index}
                icon={icon.icon}
                content={icon.label}
                href={icon.href}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
