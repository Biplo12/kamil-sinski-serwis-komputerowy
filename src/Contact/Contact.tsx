import React from 'react';

import ContactForm from '@/Contact/Partials/ContactForm';
import ContactInfo from '@/Contact/Partials/ContactInfo';
const Contact: React.FC = (): JSX.Element => {
  return (
    <div className='bg-black-stalion flex h-auto min-h-[100vh] w-full flex-col items-center justify-center gap-5'>
      <h1 className='mxsm:text-[2.5rem] text-[4rem] font-light uppercase tracking-wide'>
        Zapytaj o <span className='text-pylon font-bold'>wycene</span>
      </h1>
      <div className='bg-blue mx-auto flex max-w-[75%] rounded-[1rem] bg-opacity-50 p-2'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
