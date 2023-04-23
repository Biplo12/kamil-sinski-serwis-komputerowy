import React, { Fragment } from 'react';

import contactInfoData from '@/components/Common/contactInfoData';
import ResponsiveContactIcon from '@/components/Contact/Partials/ResponsiveContactIcon';
const FooterContact: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 text-left'>
      <div className='min-h-12 min-w-12 flex items-center justify-center gap-5'>
        {contactInfoData.map((icon, index) => (
          <Fragment key={index}>
            <ResponsiveContactIcon icon={icon.icon} href={icon.href} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default FooterContact;
