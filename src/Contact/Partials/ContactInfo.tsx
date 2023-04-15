import React from 'react';

import contactInfoData from '@/components/Common/contactInfoData';

import ContactIcon from '@/Contact/Partials/ContactIcon';
import ResponsiveContactIcon from '@/Contact/Partials/ResponsiveContactIcon';

const ContactInfo: React.FC = (): JSX.Element => {
  return (
    <div className='bg-blue mxlg:min-w-full mxlg:min-h-[400px] mxlg:py-5 mxlg:flex mxlg:justify-between mxlg:flex-col h-full min-h-[800px] w-[25%] min-w-[350px] rounded-[1rem]'>
      <div className='relative p-6'>
        <img src='/images/ellipse.png' alt='ellipse' />
        <div className='mxxsm:items-center absolute left-0 top-0 flex flex-col items-start justify-center p-7'>
          <h1 className='mxmd:text-[2rem] text-[3rem] font-bold'>Kontakt</h1>
          <p className='mxxsm:text-center'>
            Zapraszamy do kontaktu z naszym zespołem w celu uzyskania
            szczegółowych informacji na temat naszych usług.
          </p>
        </div>
      </div>
      <div className='mxxsm:pt-0 mxxsm:hidden flex flex-col items-start justify-center gap-5 p-7'>
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
      <div className='mxxsm:pt-0 mxxsm:flex hidden items-start justify-center gap-5 px-5'>
        {contactInfoData.map((icon, index) => (
          <>
            <ResponsiveContactIcon
              key={index}
              icon={icon.icon}
              href={icon.href}
            />
          </>
        ))}
      </div>
    </div>
  );
};
export default ContactInfo;
