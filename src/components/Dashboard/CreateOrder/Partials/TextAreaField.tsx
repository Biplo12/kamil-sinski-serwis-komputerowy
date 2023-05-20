import React from 'react';

import { IOrderInputValues } from '@/interfaces';

interface ITextAreaField {
  label: string;
  placeholder: string;
  inputValues: IOrderInputValues;
  setInputValues: React.Dispatch<React.SetStateAction<IOrderInputValues>>;
}

const TextAreaField: React.FC<ITextAreaField> = ({
  label,
  placeholder,
  inputValues,
  setInputValues,
}): JSX.Element => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    key: keyof IOrderInputValues
  ) => {
    setInputValues({
      ...inputValues,
      [key]: e.target.value,
    });
  };

  return (
    <>
      <label
        htmlFor='message'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <textarea
        id={`input-group-${label}`}
        rows={10}
        className='focus:border-pylon dark:focus:border-pylon mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500'
        placeholder={placeholder}
        value={
          inputValues[
            label.replace(' ', '').toLowerCase() as keyof IOrderInputValues
          ] ?? ''
        }
        onChange={(e) =>
          handleInputChange(
            e,
            label.replace(' ', '').toLowerCase() as keyof IOrderInputValues
          )
        }
      />
    </>
  );
};
export default TextAreaField;
