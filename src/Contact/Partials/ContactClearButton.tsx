import React from 'react';

import { IContactInput } from '@/interfaces';

interface IContactClearButton {
  handleClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  contactInput: IContactInput;
  contactInputInitial: IContactInput;
}

const ContactClearButton: React.FC<IContactClearButton> = ({
  handleClear,
  contactInput,
  contactInputInitial,
}): JSX.Element => {
  const isDisabled =
    JSON.stringify(contactInput) === JSON.stringify(contactInputInitial);
  return (
    <button
      onClick={handleClear}
      className='bg-pylon focus:shadow-outline mt-3 flex min-w-[175px] items-center justify-center rounded-lg px-4
      py-[0.65rem] text-center font-bold text-white
      transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      disabled={isDisabled}
    >
      Wyczyść
    </button>
  );
};
export default ContactClearButton;
