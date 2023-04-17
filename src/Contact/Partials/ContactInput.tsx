import React, { useState } from 'react';

import { IContactInput } from '@/interfaces';

interface IContactInputProps {
  label: string;
  id: string;
  setContactInput: (value: IContactInput) => void;
  contactInput: IContactInput;
}

const ContactInput: React.FC<IContactInputProps> = ({
  label,
  id,
  setContactInput,
  contactInput,
}): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (id === 'Telefon') {
      const phoneNumberRegex = /^\d+$/;
      if (phoneNumberRegex.test(value) || value === '') {
        setContactInput({ ...contactInput, [id]: value });
      }
    } else {
      setContactInput({ ...contactInput, [id]: value });
    }
  };

  return (
    <div className='relative flex w-full flex-col'>
      <label
        htmlFor={id}
        className={`ease absolute text-[0.9rem] duration-300 ${
          focus || contactInput[id]
            ? 'text-pylon -mt-5 text-[1rem]'
            : '-mt-2 text-white'
        }`}
      >
        {label}
      </label>
      <input
        type='email'
        className={`input focus:border-pylon ease duration-300 focus:ring-0 ${
          contactInput[id] ? 'input-blue' : ''
        }`}
        id={id}
        name={id}
        onChange={(e) => handleChange(e)}
        value={contactInput[id]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        maxLength={
          id === 'Wiadomość'
            ? 500
            : id === 'Temat'
            ? 100
            : id === 'Telefon'
            ? 9
            : 50
        }
      />
    </div>
  );
};
export default ContactInput;
