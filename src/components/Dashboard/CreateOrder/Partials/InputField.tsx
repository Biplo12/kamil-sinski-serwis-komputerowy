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
    setInputValues({
      ...inputValues,
      [key]:
        e.target.value.length > maxLength
          ? e.target.value.slice(0, maxLength)
          : e.target.value,
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
          min={`${type === 'number' ? 0 : ''}`}
          max={maxLength}
          value={
            inputValues[
              label.replace(' ', '').toLowerCase() as keyof IInputValues
            ]
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
