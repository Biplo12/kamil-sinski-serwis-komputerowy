import React from 'react';

import FooterFacebookPost from '@/components/layout/Footer/Partials/FooterFacebookPost';
import FooterLinks from '@/components/layout/Footer/Partials/FooterLinks';

import FooterAboutUs from './Partials/FooterAboutUs';

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className='border-blue mxsm:flex-col mxsm:gap-10 mxsm:justify-start mx-auto flex w-[85%] flex-wrap items-start justify-between gap-5 border-t-2 py-20'>
      <FooterAboutUs />
      <FooterLinks />
      <FooterFacebookPost />
    </div>
  );
};
export default Footer;
