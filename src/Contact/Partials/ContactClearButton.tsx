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
      className='text from-pylon to-blue mxlg:px-2 transform rounded-full
        bg-gradient-to-r px-12 py-2 text-center text-lg font-bold text-white opacity-90 shadow-lg
        transition duration-300 ease-in-out hover:scale-[101%] hover:opacity-100 hover:shadow-xl
        disabled:cursor-not-allowed disabled:opacity-50
        '
      disabled={isDisabled}
    >
      Wyczyść
    </button>
  );
};
export default ContactClearButton;
