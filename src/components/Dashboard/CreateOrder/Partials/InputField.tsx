import React from 'react';

import { IInputValues } from '@/interfaces';

interface IInputField {
  label: string;
  icon: JSX.Element;
  placeholder: string;
  type: string;
  inputValues: IInputValues;
  setInputValues: React.Dispatch<React.SetStateAction<IInputValues>>;
  maxLength: number;
}

const InputField: React.FC<IInputField> = ({
  label,
  icon,
  placeholder,
  type,
  inputValues,
  setInputValues,
  maxLength,
}): JSX.Element => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof IInputValues
  ) => {
    let inputValue = e.target.value;

    if (type === 'number' || type === 'tel') {
      inputValue = inputValue.replace(/[^0-9.]/g, '');
      inputValue = inputValue.replace(/^0+(?=\d)/, '');
      const parts = inputValue.split('.');
      if (parts.length > 1) {
        const decimalPart = parts[1].slice(0, 2);
        inputValue = `${parts[0]}.${decimalPart}`;
      }
    }

    if (type === 'number' && inputValue === '0') {
      inputValue = '';
    }
    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }

    setInputValues({
      ...inputValues,
      [key]: inputValue,
    });
  };

  return (
    <>
      <label
        htmlFor={`input-group-${label}`}
        className='mb-2 block text-sm font-medium text-white'
      >
        {label}
      </label>
      <div className='relative mb-6'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          {icon}
        </div>
        <input
          type={type}
          id={`input-group-${label}`}
          className='focus:border-pylon focus:ring-pylon block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 pl-10 text-sm text-white placeholder-gray-400 focus:ring-blue-500'
          placeholder={placeholder}
          maxLength={maxLength}
          value={
            inputValues[
              label.replace(' ', '').toLowerCase() as keyof IInputValues
            ] ?? ''
          }
          onChange={(e) =>
            handleInputChange(
              e,
              label.replace(' ', '').toLowerCase() as keyof IInputValues
            )
          }
        />
      </div>
    </>
  );
};

export default InputField;
