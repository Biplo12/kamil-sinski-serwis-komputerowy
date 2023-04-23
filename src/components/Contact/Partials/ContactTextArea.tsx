import React, { useEffect, useState } from 'react';

import { IContactInput } from '@/interfaces';

interface IContactTextArea {
  label: string;
  id: string;
  setContactInput: (value: IContactInput) => void;
  contactInput: IContactInput;
}

const MAX_SIGN_COUNT = 300;

const ContactTextArea: React.FC<IContactTextArea> = ({
  label,
  id,
  setContactInput,
  contactInput,
}): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);
  const [signsCount, setSignsCount] = useState<number>(0);

  useEffect(() => {
    if (contactInput[id]) {
      setSignsCount(contactInput[id].length);
    } else {
      setSignsCount(0);
    }
  }, [contactInput, id]);
  return (
    <div className='relative flex w-full flex-col'>
      <label
        htmlFor={id}
        className={`absolute top-0 text-lg ${
          contactInput[id] || focus ? 'text-pylon' : 'text-white'
        }`}
      >
        {label}
      </label>
      <div className='relative'>
        <textarea
          className={`
        ${
          contactInput[id] ? 'textarea-blue' : ''
        } focus:border-pylon textarea mt-10 h-[350px] rounded-[.5rem] focus:ring-0`}
          id={id}
          style={{ resize: 'none' }}
          name={id}
          onChange={(e) =>
            setContactInput({ ...contactInput, [id]: e.target.value })
          }
          value={contactInput[id] || ''}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          maxLength={MAX_SIGN_COUNT}
        />
        <div className='absolute bottom-5 right-5'>
          <p>
            {signsCount} / {MAX_SIGN_COUNT}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactTextArea;
