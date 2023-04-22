import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import logger from '@/lib/logger';

import Spinner from '@/components/Common/Spinner';

import { IContactInput, ISubmitStatus } from '@/interfaces';
import missingArguments from '@/utils/missingArguments';
import validateMail from '@/utils/validateMail';

interface IContactButton {
  contactInput: IContactInput;
  submitStatus: ISubmitStatus;
  handleClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setSubmitStatus: (value: ISubmitStatus) => void;
}

const ContactSubmitButton: React.FC<IContactButton> = ({
  contactInput,
  handleClear,
  setSubmitStatus,
  submitStatus,
}): JSX.Element => {
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      setSubmitStatus({
        submitted: false,
        submitting: true,
      });
      e.preventDefault();
      const missArgs = missingArguments({
        Imię: contactInput['Imię'],
        ['E-mail']: contactInput['E-mail'],
        Temat: contactInput['Temat'],
        Wiadomość: contactInput['Wiadomość'],
      });
      if (missArgs.length > 0) {
        toast.error(`Brakujące pola: ${missArgs.join(', ')}`);
      } else if (validateMail(contactInput['E-mail'])) {
        toast.error('Nieprawidłowy adres e-mail');
      } else if (contactInput['Wiadomość'].length < 10) {
        toast.error('Wiadomość musi zawierać minimum 10 znaków');
      } else if (
        contactInput['Telefon'].length > 0 &&
        contactInput['Telefon'].length < 9
      ) {
        toast.error('Nieprawidłowy numer telefonu');
      } else {
        await axios.post('/api/sendmail', {
          name: contactInput['Imię'],
          email: contactInput['E-mail'],
          phone: contactInput['Telefon'] || 'Not provided',
          subject: contactInput['Temat'],
          message: contactInput['Wiadomość'],
        });
        setSubmitStatus({
          submitted: true,
          submitting: false,
        });
        setTimeout(() => null, 10000);
        handleClear(e);
        toast.success('Wiadomość została wysłana');
      }
    } catch (err) {
      logger(err);
      toast.error('Wystąpił błąd');
    } finally {
      setSubmitStatus({
        submitted: false,
        submitting: false,
      });
    }
  };
  return (
    <button
      onClick={handleSubmit}
      className='bg-pylon focus:shadow-outline mt-3 flex min-w-[175px] items-center justify-center rounded-lg px-4
      py-[0.65rem] text-center font-bold text-white
      transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
    >
      {submitStatus.submitting ? <Spinner /> : 'Wyślij'}
    </button>
  );
};
export default ContactSubmitButton;
