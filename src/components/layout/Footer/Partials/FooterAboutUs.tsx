import React from 'react';

import FooterContact from '@/components/layout/Footer/Partials/FooterContact';
const FooterAboutUs: React.FC = (): JSX.Element => {
  return (
    <div className='mxsm:max-w-[85%] flex max-w-[30%] flex-col items-start justify-center gap-5 text-left'>
      <img src='/images/small-logo-blue.png' alt='logo' className='w-48' />
      <p>
        Nasza wizja to zapewnienie naszym klientom nie tylko najlepszych usług
        serwisowych, ale także kompleksowej obsługi i doradztwa w zakresie
        wyboru odpowiedniego sprzętu i oprogramowania do ich potrzeb. Stawiamy
        na indywidualne podejście do każdego klienta, aby zapewnić najlepsze
        rozwiązania zgodne z jego potrzebami.
      </p>
      <FooterContact />
    </div>
  );
};
export default FooterAboutUs;
