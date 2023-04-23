import React from 'react';

import FormButton from '@/components/Common/FormButton';

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
    <FormButton text='Wyczyść' handler={handleClear} isDisabled={isDisabled} />
  );
};
export default ContactClearButton;
