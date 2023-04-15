import axios from 'axios';
import React from 'react';

import logger from '@/lib/logger';

import Spinner from '@/components/Common/Spinner';

import { IContactInput, IMessages, ISubmitStatus } from '@/interfaces';
import missingArguments from '@/utils/missingArguments';

interface IContactButton {
  contactInput: IContactInput;
  handleClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setSubmitStatus: (value: ISubmitStatus) => void;
  setMessages: (value: IMessages) => void;
}

const ContactSubmitButton: React.FC<IContactButton> = ({
  contactInput,
  handleClear,
  setSubmitStatus,
  setMessages,
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
        setMessages({
          success: '',
          error: `Brakujące pola: ${missArgs.join(', ')}`,
        });
      } else if (
        !contactInput['E-mail'].includes('@') ||
        !contactInput['E-mail'].includes('.')
      ) {
        setMessages({
          success: '',
          error: 'Nieprawidłowy adres e-mail',
        });
      } else if (contactInput['Wiadomość'].length < 10) {
        setMessages({
          success: '',
          error: 'Wiadomość musi zawierać minimum 10 znaków',
        });
      } else if (
        contactInput['Telefon'].length > 0 &&
        contactInput['Telefon'].length < 9
      ) {
        setMessages({
          success: '',
          error: 'Nieprawidłowy numer telefonu',
        });
      } else {
        await axios.post('/api/sendmail', {
          name: contactInput['Imię'],
          email: contactInput['E-mail'],
          phone: contactInput['Telefon'] || 'Not provided',
          subject: contactInput['Temat'],
          message: contactInput['Wiadomość'],
        });
        setMessages({
          success: 'Wiadomość została wysłana',
          error: '',
        });
        // handleClear(e);
      }
    } catch (err) {
      logger(err);
      setMessages({
        success: '',
        error: 'Wystąpił błąd podczas wysyłania wiadomości',
      });
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
      className='text from-pylon to-blue transform rounded-full bg-gradient-to-r
        px-16 py-2 text-lg font-bold text-white opacity-90 shadow-lg transition duration-300
        ease-in-out hover:scale-[101%] hover:opacity-100 hover:shadow-xl'
    >
      {contactInput.submitting ? <Spinner /> : 'Wyślij'}
    </button>
  );
};
export default ContactSubmitButton;
