import React from 'react';

import ContactForm from './Partials/ContactForm';
import ContactInfo from './Partials/ContactInfo';
const Contact: React.FC = (): JSX.Element => {
  return (
    <div
      className='bg-black-stalion mxxsm:px-5 flex h-auto min-h-[100vh] w-full flex-col items-center justify-center gap-10 px-[10%] py-10  '
      id='kontakt'
    >
      <h1 className='mxmd:text-[2.5rem] text-center text-[4rem] font-light uppercase tracking-wide'>
        Zapytaj o <span className='text-pylon font-bold'>wycene</span>
      </h1>
      <div className='bg-blue mxlg:flex-col mx-auto flex w-full rounded-[1rem] bg-opacity-50 p-2'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
