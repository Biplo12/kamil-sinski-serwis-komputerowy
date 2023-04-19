import React, { Fragment, useState } from 'react';

import ContactClearButton from '@/Contact/Partials/ContactClearButton';
import ContactInput from '@/Contact/Partials/ContactInput';
import ContactSubmitButton from '@/Contact/Partials/ContactSubmitButton';
import ContactTextArea from '@/Contact/Partials/ContactTextArea';
import { IContactInput, ISubmitStatus } from '@/interfaces';
const ContactForm: React.FC = (): JSX.Element => {
  const contactInputInitial: IContactInput = {
    Imię: '',
    ['E-mail']: '',
    Telefon: '',
    Temat: '',
    Wiadomość: '',
  };

  const sumbitStatusInitial: ISubmitStatus = {
    submitted: false,
    submitting: false,
  };
  const [contactInput, setContactInput] =
    useState<IContactInput>(contactInputInitial);
  const [submitStatus, setSubmitStatus] =
    useState<ISubmitStatus>(sumbitStatusInitial);
  const contactInputs = [
    {
      label: 'Imię',
      id: 'Imię',
    },
    {
      label: 'E-mail',
      id: 'E-mail',
    },
    {
      label: 'Telefon (opcjonalnie)',
      id: 'Telefon',
    },
    {
      label: 'Temat',
      id: 'Temat',
    },
  ];

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setContactInput(contactInputInitial);
  };

  return (
    <div className='mxlg:p-5 w-full p-10'>
      <form className='flex flex-col gap-12'>
        <div className='mxlg:flex-col flex gap-5'>
          {contactInputs.slice(0, 2).map((input, index) => (
            <Fragment key={index}>
              <ContactInput
                label={input.label}
                id={input.id}
                setContactInput={setContactInput}
                contactInput={contactInput}
              />
            </Fragment>
          ))}
        </div>
        <div className='mxlg:flex-col flex gap-5'>
          {contactInputs.slice(2, 4).map((input, index) => (
            <Fragment key={index}>
              <ContactInput
                label={input.label}
                id={input.id}
                setContactInput={setContactInput}
                contactInput={contactInput}
              />
            </Fragment>
          ))}
        </div>
        <div className='flex flex-col items-start justify-center gap-10'>
          <ContactTextArea
            label='Treść wiadomości'
            id='Wiadomość'
            setContactInput={setContactInput}
            contactInput={contactInput}
          />
          <div className='mxlg:flex-col mxlg:w-full flex gap-5'>
            <ContactSubmitButton
              contactInput={contactInput}
              handleClear={handleClear}
              setSubmitStatus={setSubmitStatus}
              submitStatus={submitStatus}
            />
            <ContactClearButton
              handleClear={handleClear}
              contactInput={contactInput}
              contactInputInitial={contactInputInitial}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
