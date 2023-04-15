import React from 'react';

import ContactInput from '@/Contact/Partials/ContactInput';
const ContactForm: React.FC = (): JSX.Element => {
  return (
    <div className='w-full p-10'>
      <form>
        <div className='flex gap-5'>
          {/* <ContactInput label='Imię' id='name' /> */}
          {/* <ContactInput label='E-mail' id='mail' /> */}
        </div>
        <div className='flex gap-5'>
          {/* <ContactInput label='Telefon' id='phone' /> */}
          {/* <ContactInput label='Temat' id='topic' /> */}
        </div>
        <ContactInput label='Treść wiadomośći' id='message' />
      </form>
    </div>
  );
};
export default ContactForm;
